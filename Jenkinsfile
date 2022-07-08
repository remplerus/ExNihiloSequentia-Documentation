pipeline {
    agent {
        kubernetes {
            defaultContainer 'kaniko'
            yaml '''
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
'''
        }
    }
    environment {
        K8S_CA = credentials('k8s-ca')
    }
    stages{
        stage('Build NGNIX Image') {
            steps {
                container('kaniko') {
                    steps{
                        script{
                            sh 'echo "TAG=$(date +%Y.%m.%d-%H.%M.%S)"'
                        }
                        sh '''
                        /kaniko/executor --context git://github.com/NovaMachina-Mods/ExNihiloSequentia-Documentation.git#refs/heads/master --destination novamachina/mod-docs:${TAG} --force
                        '''
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps{
                sh script: "sed -i 's/TAG/${TAG}/g' deployment.yaml"
                kubeconfig(caCertificate: '${K8S_CA}', credentialsId: 'Kube Config', serverUrl: 'http://jacob-williams.me:6443') {
                    sh script: "kubectl apply -f deployment.yaml"
                }
            }
        }
    }
}
