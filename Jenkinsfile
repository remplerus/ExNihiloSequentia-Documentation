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
      container('kaniko') {
        stage('Build React Project') {
          env.TAG = sh returnStdout: true, script: 'date "+%Y.%m.%d-%H.%M.%S"'
          sh '''
            /kaniko/executor --context git://github.com/NovaMachina-Mods/ExNihiloSequentia-Documentation.git#refs/heads/master --destination novamachina/mod-docs:${TAG} --force
          '''
        }
      }
    }
    stage('Deploy to Kubernetes') {
        sh script: "sed -i 's/TAG/${TAG}'" deployment.yaml
        kubeconfig(credentialsId: 'Kube Config', serverUrl: 'http://jacob-williams.me:6443') {
            kubectl apply -f deployment.yaml
        }
    }
  }
}
