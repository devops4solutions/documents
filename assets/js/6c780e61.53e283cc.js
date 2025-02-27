"use strict";(self.webpackChunkdevops4solution=self.webpackChunkdevops4solution||[]).push([[157],{306:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=a(8168),r=(a(6540),a(5680));a(1873);const o={title:"Kubernetes Pods explained with examples",date:"2020-12-14",categories:["kubernetes"],tags:["pods"]},i=void 0,l={unversionedId:"Kubernetes/kubernetes-pods-examples",id:"Kubernetes/kubernetes-pods-examples",title:"Kubernetes Pods explained with examples",description:"In this blog, we will explore the concepts of Kubernetes pods, how to create them using the yaml configuration, check pod logs etc.",source:"@site/docs/Kubernetes/kubernetes-pods-examples.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/kubernetes-pods-examples",permalink:"/*/docs/Kubernetes/kubernetes-pods-examples",draft:!1,editUrl:"https://devops4solutions.github.io/docs/edit/main/docs/Kubernetes/kubernetes-pods-examples.md",tags:[{label:"pods",permalink:"/*/docs/tags/pods"}],version:"current",frontMatter:{title:"Kubernetes Pods explained with examples",date:"2020-12-14",categories:["kubernetes"],tags:["pods"]},sidebar:"tutorialSidebar",previous:{title:"What is Kubernetes ?",permalink:"/*/docs/Kubernetes/intro-kubernetes"},next:{title:"Kubernetes Labels and Annotation",permalink:"/*/docs/Kubernetes/labels-and-annotations"}},p={},s=[{value:"<strong>Prerequisite</strong>:",id:"prerequisite",level:3},{value:"<strong>Agenda</strong>:",id:"agenda",level:3},{value:"<strong>What is a POD</strong>",id:"what-is-a-pod",level:3},{value:"<strong>Creating a first pod with single container</strong>",id:"creating-a-first-pod-with-single-container",level:3},{value:"<strong>Why we use namespace\xa0?</strong>",id:"why-we-use-namespace",level:5},{value:"<strong>Create a pod in different namespaces</strong>",id:"create-a-pod-in-different-namespaces",level:3},{value:"Pod in a Different Namespace by using yaml configuration",id:"pod-in-a-different-namespace-by-using-yaml-configuration",level:3},{value:"<strong>Change the default namespace</strong>",id:"change-the-default-namespace",level:3},{value:"Pod Running a Container",id:"pod-running-a-container",level:3},{value:"Pod Running a Container That Exposes a\xa0Port",id:"pod-running-a-container-that-exposes-aport",level:3},{value:"Pod Running a Container with Resource Requirements",id:"pod-running-a-container-with-resource-requirements",level:3},{value:"<strong>CPU Requirement for our container</strong>",id:"cpu-requirement-for-our-container",level:5},{value:"Pod with Resource Requests That Can\u2019t Be Met by Any of the\xa0Nodes",id:"pod-with-resource-requests-that-cant-be-met-by-any-of-thenodes",level:3},{value:"Pod with Multiple Containers Running inside\xa0It",id:"pod-with-multiple-containers-running-insideit",level:3},{value:"<strong>Pod Lifecycle</strong>",id:"pod-lifecycle",level:3}],g={toc:s},u="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In this blog, we will explore the concepts of Kubernetes pods, how to create them using the yaml configuration, check pod logs etc.\xa0"),(0,r.yg)("p",null,"Check out my ",(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/j4I-YmfWPGc"},"YouTube")," video on this blog."),(0,r.yg)("h3",{id:"prerequisite"},(0,r.yg)("strong",{parentName:"h3"},"Prerequisite"),":"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Functional ",(0,r.yg)("a",{parentName:"li",href:"https://devops4solutions.com/setup-kubernetes-cluster-in-gcp/"},"Kubernetes Cluster")," configured"),(0,r.yg)("li",{parentName:"ol"},"Kubernetes\u2019 command-line tool, kubectl, which is the command-line interface for running commands against Kubernetes clusters."),(0,r.yg)("li",{parentName:"ol"},"Clone ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/devops4solutions/kubernetes-sample-deployment"},"this")," git repo for all the yaml files which we will be using in this blog")),(0,r.yg)("h3",{id:"agenda"},(0,r.yg)("strong",{parentName:"h3"},"Agenda"),":"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a simple pod"),(0,r.yg)("li",{parentName:"ol"},"Create a pod in different namespaces"),(0,r.yg)("li",{parentName:"ol"},"Creating a Pod in a Different Namespace using yaml configuration"),(0,r.yg)("li",{parentName:"ol"},"Create a Pod running a container"),(0,r.yg)("li",{parentName:"ol"},"Change the default namespace"),(0,r.yg)("li",{parentName:"ol"},"Pod Running a Container That Exposes a Port"),(0,r.yg)("li",{parentName:"ol"},"Pod Running a Container with Resource Requirements"),(0,r.yg)("li",{parentName:"ol"},"Create a Pod with Resource Requests That Can\u2019t Be Met by Any of the Nodes"),(0,r.yg)("li",{parentName:"ol"},"Pod with Multiple Containers"),(0,r.yg)("li",{parentName:"ol"},"Pod Lifecycle")),(0,r.yg)("h3",{id:"what-is-a-pod"},(0,r.yg)("strong",{parentName:"h3"},"What is a POD")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A pod is the basic building block of Kubernetes"),(0,r.yg)("li",{parentName:"ul"},"Basic unit of deployment"),(0,r.yg)("li",{parentName:"ul"},"A pod can have any number of containers running in it"),(0,r.yg)("li",{parentName:"ul"},"A pod is basically a wrapper around containers running on a node"),(0,r.yg)("li",{parentName:"ul"},"Containers in a pod have shared volumes, Linux namespaces, and cgroups. Each pod has a unique IP address and the port space is shared by all the containers in that pod. This means that different containers inside a pod can communicate with each other using their corresponding ports on localhost.")),(0,r.yg)("h3",{id:"creating-a-first-pod-with-single-container"},(0,r.yg)("strong",{parentName:"h3"},"Creating a first pod with single container")),(0,r.yg)("p",null,"kind: Pod",(0,r.yg)("br",{parentName:"p"}),"\n","apiVersion: v1",(0,r.yg)("br",{parentName:"p"}),"\n","metadata:",(0,r.yg)("br",{parentName:"p"}),"\n","name: pod-1",(0,r.yg)("br",{parentName:"p"}),"\n","spec:",(0,r.yg)("br",{parentName:"p"}),"\n","containers:  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"name: container-1",(0,r.yg)("br",{parentName:"li"}),"image: nginx")),(0,r.yg)("p",null,"Create a pod"),(0,r.yg)("p",null,"kubectl create -f pod-singlecontainer.yaml",(0,r.yg)("br",{parentName:"p"}),"\n","kubectl get pods"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*nf3hUPv1uj_Q1Z0HgqLZ7Q.png",alt:null})),(0,r.yg)("p",null,"Describe the pod"),(0,r.yg)("p",null,"kubectl describe pod pod-1"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*_2G50KApFAryusn2ltzcXQ.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Name"),": Pod name is unique in a particular namespace"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Namespace:")," Kubernetes supports namespaces to create multiple virtual clusters within the same physical cluster."),(0,r.yg)("h5",{id:"why-we-use-namespace"},(0,r.yg)("strong",{parentName:"h5"},"Why we use namespace\xa0?")),(0,r.yg)("p",null,"When we have only one cluster and different teams are using that. In that case it would be great if every team create their resources in their own namespaces."),(0,r.yg)("p",null,"We want to separate the environment like dev, stage in different namespaces"),(0,r.yg)("h3",{id:"create-a-pod-in-different-namespaces"},(0,r.yg)("strong",{parentName:"h3"},"Create a pod in different namespaces")),(0,r.yg)("p",null,"First you can check how many namespaces are already present"),(0,r.yg)("p",null,"kubectl get namespaces"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*bKY0fPDwlbLphr7g_AJFUQ.png",alt:null})),(0,r.yg)("p",null,"Here, I am using the same yaml file to create a pod if I don\u2019t specify the namespace the command will fail with the error \u201c",(0,r.yg)("strong",{parentName:"p"},"pod is already exist"),"\u201d"),(0,r.yg)("p",null,"kubectl --namespace=kube-public create -f pod-singlecontainer.yaml"),(0,r.yg)("p",null,"Verify the pod"),(0,r.yg)("p",null,"Now to check pods you need to define the namespace else by default ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl get pods")," command will show only pods which are running in the default namespace."),(0,r.yg)("p",null,"kubectl --namespace kube-public get pods"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*GoD5vHDEzFhsPcCUAN7Pyg.png",alt:null})),(0,r.yg)("h3",{id:"pod-in-a-different-namespace-by-using-yaml-configuration"},"Pod in a Different Namespace by using yaml configuration"),(0,r.yg)("p",null,"In the yaml file we will define which namespace to use while creating a pod"),(0,r.yg)("p",null,"kind: Pod",(0,r.yg)("br",{parentName:"p"}),"\n","apiVersion: v1",(0,r.yg)("br",{parentName:"p"}),"\n","metadata:",(0,r.yg)("br",{parentName:"p"}),"\n","name: pod-1",(0,r.yg)("br",{parentName:"p"}),"\n","",(0,r.yg)("strong",{parentName:"p"},"namespace: kube-public"),"spec:",(0,r.yg)("br",{parentName:"p"}),"\n","containers:  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"name: container-1",(0,r.yg)("br",{parentName:"li"}),"image: nginx")),(0,r.yg)("p",null,"Create and verify a Pod"),(0,r.yg)("p",null,"kubectl create -f pod-namespacesinglecontainer.yaml",(0,r.yg)("br",{parentName:"p"}),"\n","kubectl --namespace kube-public get pods"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*E_h_Fb7CiXHvLSGfsW4uAw.png",alt:null})),(0,r.yg)("h3",{id:"change-the-default-namespace"},(0,r.yg)("strong",{parentName:"h3"},"Change the default namespace")),(0,r.yg)("p",null,"So we saw that we need to explicitly define the namespace to show all the pods which are running in that namespace."),(0,r.yg)("p",null,"This is not a convenient way if we are doing this for each and every command\xa0."),(0,r.yg)("p",null,"When we know that we are working only on one namespace than we can set that using the below command"),(0,r.yg)("p",null,"kubectl config set-context --current --namespace kube-public"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*qgQEfpRmx8v1FCoDTbI7KQ.png",alt:null})),(0,r.yg)("p",null,"Check the pods"),(0,r.yg)("p",null,"kubectl get pods"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*wYMbujzwcbJSE5-DQQlsBQ.png",alt:null})),(0,r.yg)("h3",{id:"pod-running-a-container"},"Pod Running a Container"),(0,r.yg)("p",null,"In this yaml file we are providing the configuration for a container as shown below:"),(0,r.yg)("p",null,"kind: Pod",(0,r.yg)("br",{parentName:"p"}),"\n","apiVersion: v1",(0,r.yg)("br",{parentName:"p"}),"\n","metadata:",(0,r.yg)("br",{parentName:"p"}),"\n","name: command-pod",(0,r.yg)("br",{parentName:"p"}),"\n","spec:",(0,r.yg)("br",{parentName:"p"}),"\n","**containers:  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"name:** container-with-command")),(0,r.yg)("p",null,"**image: ubuntu",(0,r.yg)("br",{parentName:"p"}),"\n","command:  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"- /bin/bash  \n- -ec  \n- while :; do echo '.'; sleep 5; done**\n")),(0,r.yg)("p",null,"Create a pod"),(0,r.yg)("p",null,"kubectl create -f pod-singlecontainer.yaml"),(0,r.yg)("p",null,"Check the logs"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Now we will check the logs of our container using the pod name")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"The")," ",(0,r.yg)("strong",{parentName:"p"},"-","f")," ",(0,r.yg)("em",{parentName:"p"},"flag is to follow the logs on the container. That is, the log keeps updating in real-time")),(0,r.yg)("p",null,"kubectl logs command-pod -f"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*Xbvi7vfyhoW9qkQ__cUv3A.png",alt:null})),(0,r.yg)("h3",{id:"pod-running-a-container-that-exposes-aport"},"Pod Running a Container That Exposes a\xa0Port"),(0,r.yg)("p",null,"In this yaml file we are using a ",(0,r.yg)("inlineCode",{parentName:"p"},"nginx")," image and exposing it on the port ",(0,r.yg)("inlineCode",{parentName:"p"},"80"),"\xa0"),(0,r.yg)("p",null,"kind: Pod",(0,r.yg)("br",{parentName:"p"}),"\n","apiVersion: v1",(0,r.yg)("br",{parentName:"p"}),"\n","metadata:",(0,r.yg)("br",{parentName:"p"}),"\n","name: pod-exposed-port",(0,r.yg)("br",{parentName:"p"}),"\n","spec:",(0,r.yg)("br",{parentName:"p"}),"\n","containers:  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"name: container-exposed-port",(0,r.yg)("br",{parentName:"li"}),"image: nginx",(0,r.yg)("br",{parentName:"li"}),"ports:  ",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"containerPort: 80"))))),(0,r.yg)("p",null,"Create the pod"),(0,r.yg)("p",null,"kubectl create -f pod-expose-pod.yaml"),(0,r.yg)("p",null,"This pod should create a container and expose it on port ",(0,r.yg)("inlineCode",{parentName:"p"},"80")),(0,r.yg)("p",null,"Now we will use the ",(0,r.yg)("inlineCode",{parentName:"p"},"port-forward")," to expose this port to the localhost or you can define the another port also using the second command"),(0,r.yg)("p",null,"kubectl port-forward pod-exposed-port 80"),(0,r.yg)("p",null,"kubectl port-forward pod-exposed-port 8000:80"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*VhAMvJ6K2ywh3CceVqcPEw.png",alt:null})),(0,r.yg)("p",null,"Now you can access the url"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"http://localhost"},"http://localhost"),(0,r.yg)("br",{parentName:"p"}),"\n","http://localhost:8000"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*y9mTLlkhEz2CpZfylTMFfA.png",alt:null})),(0,r.yg)("h3",{id:"pod-running-a-container-with-resource-requirements"},"Pod Running a Container with Resource Requirements"),(0,r.yg)("p",null,"In this YAML file, we define the\xa0"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Memory requirement for our container")),(0,r.yg)("p",null,"Minimum Memory\u200a\u2014\u200a",(0,r.yg)("inlineCode",{parentName:"p"},"64MB"),"\xa0"),(0,r.yg)("p",null,"Maximum Memory- ",(0,r.yg)("inlineCode",{parentName:"p"},"128MB")),(0,r.yg)("p",null,"If the container tries to allocate more than 128 MB of memory, it will be killed with a status of ",(0,r.yg)("strong",{parentName:"p"},"OOMKilled"),"."),(0,r.yg)("h5",{id:"cpu-requirement-for-our-container"},(0,r.yg)("strong",{parentName:"h5"},"CPU Requirement for our container")),(0,r.yg)("p",null,"Minimum CPU\u2014 ",(0,r.yg)("inlineCode",{parentName:"p"},"0.5")),(0,r.yg)("p",null,"Maximum CPU- ",(0,r.yg)("inlineCode",{parentName:"p"},"1")),(0,r.yg)("p",null,"The minimum CPU requirement for CPU is 0.5 (which can also be understood as 500 milli-CPUs and can be written as ",(0,r.yg)("strong",{parentName:"p"},"500m")," instead of ",(0,r.yg)("strong",{parentName:"p"},"0.5"),") and the container will only be allowed to use a maximum of 1 CPU unit."),(0,r.yg)("p",null,"kind: Pod",(0,r.yg)("br",{parentName:"p"}),"\n","apiVersion: v1",(0,r.yg)("br",{parentName:"p"}),"\n","metadata:",(0,r.yg)("br",{parentName:"p"}),"\n","name: pod-resources",(0,r.yg)("br",{parentName:"p"}),"\n","spec:",(0,r.yg)("br",{parentName:"p"}),"\n","containers:  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"name: container-resource-requirements",(0,r.yg)("br",{parentName:"li"}),"image: nginx",(0,r.yg)("br",{parentName:"li"}),(0,r.yg)("strong",{parentName:"li"},"resources:",(0,r.yg)("br",{parentName:"strong"}),"limits:",(0,r.yg)("br",{parentName:"strong"}),'memory: "128M"',(0,r.yg)("br",{parentName:"strong"}),'cpu: "1"',(0,r.yg)("br",{parentName:"strong"}),"requests:",(0,r.yg)("br",{parentName:"strong"}),'memory: "64M"',(0,r.yg)("br",{parentName:"strong"}),'cpu: "0.5"'))),(0,r.yg)("p",null,"Create the pod"),(0,r.yg)("p",null,"kubectl create -f pod-with-resources.yaml"),(0,r.yg)("p",null,"Describe the pod"),(0,r.yg)("p",null,"kubectl describe pod-resources"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*NccEmC-yKrG5zhCLcp4uMQ.png",alt:null})),(0,r.yg)("h3",{id:"pod-with-resource-requests-that-cant-be-met-by-any-of-thenodes"},"Pod with Resource Requests That Can\u2019t Be Met by Any of the\xa0Nodes"),(0,r.yg)("p",null,"In this yaml file we are using resources which are not available in our cluster nodes."),(0,r.yg)("p",null,"kind: Pod",(0,r.yg)("br",{parentName:"p"}),"\n","apiVersion: v1",(0,r.yg)("br",{parentName:"p"}),"\n","metadata:",(0,r.yg)("br",{parentName:"p"}),"\n","name: pod-huge-resources",(0,r.yg)("br",{parentName:"p"}),"\n","spec:",(0,r.yg)("br",{parentName:"p"}),"\n","containers:  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"name: container-resource-requirements",(0,r.yg)("br",{parentName:"li"}),"image: nginx",(0,r.yg)("br",{parentName:"li"}),(0,r.yg)("strong",{parentName:"li"},"resources:",(0,r.yg)("br",{parentName:"strong"}),"limits:",(0,r.yg)("br",{parentName:"strong"}),'memory: "128G"',(0,r.yg)("br",{parentName:"strong"}),'cpu: "1000"',(0,r.yg)("br",{parentName:"strong"}),"requests:",(0,r.yg)("br",{parentName:"strong"}),'memory: "64G"',(0,r.yg)("br",{parentName:"strong"}),'cpu: "500"'))),(0,r.yg)("p",null,"Create a pod"),(0,r.yg)("p",null,"kubectl create -f pod-with-huge-resources.yaml",(0,r.yg)("br",{parentName:"p"}),"\n","kubectl describe pod pod-huge-resources"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*aVCDutkH-fujCMSXV1HH8g.png",alt:null})),(0,r.yg)("h3",{id:"pod-with-multiple-containers-running-insideit"},"Pod with Multiple Containers Running inside\xa0It"),(0,r.yg)("p",null,"In this yaml file you can see that we are creating two container inside a pod"),(0,r.yg)("p",null,"kind: Pod",(0,r.yg)("br",{parentName:"p"}),"\n","apiVersion: v1",(0,r.yg)("br",{parentName:"p"}),"\n","metadata:",(0,r.yg)("br",{parentName:"p"}),"\n","name: multi-container",(0,r.yg)("br",{parentName:"p"}),"\n","spec:",(0,r.yg)("br",{parentName:"p"}),"\n","containers:",(0,r.yg)("br",{parentName:"p"}),"\n","",(0,r.yg)("strong",{parentName:"p"},"- name: container-1"),(0,r.yg)("br",{parentName:"p"}),"\n","image: nginx",(0,r.yg)("br",{parentName:"p"}),"\n","",(0,r.yg)("strong",{parentName:"p"},"- name: container-2"),(0,r.yg)("br",{parentName:"p"}),"\n","image: ubuntu",(0,r.yg)("br",{parentName:"p"}),"\n","command:  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"- /bin/bash  \n- -ec  \n- while :; do echo '.'; sleep 5; done\n")),(0,r.yg)("p",null,"Create a Pod"),(0,r.yg)("p",null,"kubectl create -f pod-multi-container.yaml",(0,r.yg)("br",{parentName:"p"}),"\n","kubectl describe pod multi-container"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*TRue4OPFe4oyyRj2lErmMA.png",alt:null})),(0,r.yg)("p",null,"We can specify the container name to get the logs for a particular container running in a pod, as shown here:"),(0,r.yg)("p",null,"kubectl logs multi-container container-2",(0,r.yg)("br",{parentName:"p"}),"\n","kubectl logs multi-container container-1"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*3dmd7KMcpGkPbcCFB9v9fQ.png",alt:null})),(0,r.yg)("h3",{id:"pod-lifecycle"},(0,r.yg)("strong",{parentName:"h3"},"Pod Lifecycle")),(0,r.yg)("p",null,"Pods has different States as described below:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Pending"),": This means that the pod has been submitted to the cluster, but the controller hasn\u2019t created all its containers yet. It may be downloading images or waiting for the pod to be scheduled on one of the cluster nodes."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Running"),": This state means that the pod has been assigned to one of the cluster nodes and at least one of the containers is either running or is in the process of starting up."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Succeeded"),": This state means that the pod has run, and all of its containers have been terminated with success."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Failed"),": This state means the pod has run and at least one of the containers has terminated with a non-zero exit code, that is, it has failed to execute its commands."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Unknown"),": This means that the state of the pod could not be found. This may be because of the inability of the controller to connect with the node that the pod was assigned to.")))}m.isMDXComponent=!0},1873:(e,n,a)=>{a(6540)},5680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>d});var t=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},g=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,d=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return a?t.createElement(d,i(i({ref:n},g),{},{components:a})):t.createElement(d,i({ref:n},g))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);