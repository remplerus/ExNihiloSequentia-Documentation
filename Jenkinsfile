pipeline {
    agent {
        kubernetes {
            cloud 'Kubernetes'
            namespace 'default'
            yaml '''apiVersion: v1
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
                    path: config.json'''
        }
    }

    stages {
        stage('Build React App') {
            steps {
                script {
                    env.TAG = sh returnStdout: true, script: 'date "+%Y.%m.%d-%H.%M.%s"'
                }
                container('kaniko') {
                    sh '/kaniko/executor --context git://github.com/NovaMachina-Mods/ExNihiloSequentia-Documentation.git#refs/heads/master --destination novamachina/mod-docs:${TAG} --force'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    echo "DEPLOYING novamachina/mod-docs:${TAG}"
                }
            }
        }
    }
}
