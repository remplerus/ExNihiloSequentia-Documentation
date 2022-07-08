podTemplate(yaml: '''
    apiVersion: v1
    kind: Pod
    spec:
      containers:
      - name: kaniko
        image: gcr.io/kaniko-project/executor:debug
        command:
        - sleep
        args:
        - 9999999
        volumeMounts:
        - name: kaniko-secret
          mountPath: /kaniko/.docker
      restartPolicy: Never
      volumes:
      - name: kaniko-secret
        secret:
            secretName: dockercred
            items:
            - key: .dockerconfigjson
              path: config.json
''') {
  node(POD_LABEL) {
    stage('Build NGNIX Image') {
      script {
        env.TAG = sh script: "date +%Y.%m.%d-%H.%M.%S"
        echo "TAG: ${TAG}"
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
        sh script: "sed -i 's/TAG/${TAG}/' deployment.yaml"
        kubeconfig(caCertificate: credentials('k8s-ca'), credentialsId: 'Kube Config', serverUrl: 'http://jacob-williams.me:6443') {
            sh script: "kubectl apply -f deployment.yaml"
        }
    }
  }
}
