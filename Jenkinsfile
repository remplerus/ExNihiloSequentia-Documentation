podTemplate(yaml: '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: kaniko
    image: gcr.io/kaniko-project/executor:debug
    args: ["--cache",
            "--cache-dir=/cache",
            "--cache-copy-layers]
    volumeMounts:
    - name: kaniko-secret
      mountPath: /kaniko/.docker
    - name: kaniko-cache
      mountPath: /cache
  - name: jnlp
    image: novamachina/inbound-agent:2022.07.08-09.52.29
  restartPolicy: Never
  volumes:
  - name: kaniko-secret
    secret:
        secretName: dockercred
        items:
        - key: .dockerconfigjson
          path: config.json
  - name: kaniko-cache
    persistentVolumeClaim:
      claimName: kaniko-cache
''') {
  node(POD_LABEL) {
    properties([
        buildDiscarder(logRotator(numToKeepStr: '5'))
    ])
    stage('Clone') {
        git credentialsId: '116d5159-9fe5-44ce-b7c4-d353c4837524', url: 'https://github.com/NovaMachina-Mods/ExNihiloSequentia-Documentation'
    }
    stage('Build NGNIX Image') {
        script {
            env.TAG = sh(returnStdout: true,script: "date +%Y.%m.%d-%H.%M.%S").trim()
        }
      container('kaniko') {
        stage('Build React Project') {
          withEnv(["TAG=${TAG}"]){
            sh script: "/kaniko/executor --context git://github.com/NovaMachina-Mods/ExNihiloSequentia-Documentation.git#refs/heads/master --destination novamachina/mod-docs:$TAG --force"
          }
        }
      }
    }
    stage('Deploy to Kubernetes') {
        script {
            env.K8S_CA = credentials('k8s-ca')
        }
        
        sh script: "sed -i 's/TAG/${TAG}/' deployment.yaml"
        sh script: "cat deployment.yaml"
        
        kubeconfig(caCertificate: env.K8S_CA, credentialsId: 'Kube Config', serverUrl: 'http://jacob-williams.me:6443') {
            sh script: "kubectl apply -f deployment.yaml"
        }
    }
  }
}
