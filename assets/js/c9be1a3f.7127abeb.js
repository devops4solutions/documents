"use strict";(self.webpackChunkdevops4solution=self.webpackChunkdevops4solution||[]).push([[957],{1873:(e,t,n)=>{n(6540)},3687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(8168),a=(n(6540),n(5680));n(1873);const l={title:"Exposing Kubernetes Applications using\xa0Services",date:"2020-12-12",categories:["kubernetes"],tags:["kubernetes","nodeport","services"]},p=void 0,o={unversionedId:"Kubernetes/services",id:"Kubernetes/services",title:"Exposing Kubernetes Applications using\xa0Services",description:"In this blog, we will explore how we can access the kubernetes applications externally using Services.",source:"@site/docs/Kubernetes/services.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/services",permalink:"/*/docs/Kubernetes/services",draft:!1,editUrl:"https://devops4solutions.github.io/docs/edit/main/docs/Kubernetes/services.md",tags:[{label:"kubernetes",permalink:"/*/docs/tags/kubernetes"},{label:"nodeport",permalink:"/*/docs/tags/nodeport"},{label:"services",permalink:"/*/docs/tags/services"}],version:"current",frontMatter:{title:"Exposing Kubernetes Applications using\xa0Services",date:"2020-12-12",categories:["kubernetes"],tags:["kubernetes","nodeport","services"]},sidebar:"tutorialSidebar",previous:{title:"Understand Kubernetes Object and Create Nginx Deployment",permalink:"/*/docs/Kubernetes/objects"},next:{title:"What is Sonarqube",permalink:"/*/docs/Sonarqube/"}},s={},i=[{value:"<strong>Prerequisite</strong>:",id:"prerequisite",level:3},{value:"<strong>Agenda</strong>:",id:"agenda",level:3},{value:"<strong>Create a Kubernetes cluster</strong>",id:"create-a-kubernetes-cluster",level:3},{value:"VPC Create",id:"vpc-create",level:5},{value:"Firewall rule with tag <code>cluster</code>\xa0",id:"firewall-rule-with-tag-cluster",level:5},{value:"Cluster using the tag <code>cluster</code>\xa0",id:"cluster-using-the-tag-cluster",level:5},{value:"<strong>Create a Pod</strong>",id:"create-a-pod",level:4},{value:"<strong>Kubernetes Services</strong>",id:"kubernetes-services",level:3},{value:"Types of Services",id:"types-of-services",level:5},{value:"<strong>ClusterIP</strong>",id:"clusterip",level:4},{value:"<strong>NodePort</strong>",id:"nodeport",level:4},{value:"<strong>LoadBalancer</strong>",id:"loadbalancer",level:4}],g={toc:i},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"In this blog, we will explore how we can access the kubernetes applications externally using Services."),(0,a.yg)("p",null,"Checkout my ",(0,a.yg)("a",{parentName:"p",href:"https://youtu.be/tm3Sd1z2c3c"},"YouTube")," video on this blog."),(0,a.yg)("h3",{id:"prerequisite"},(0,a.yg)("strong",{parentName:"h3"},"Prerequisite"),":"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Functional ",(0,a.yg)("a",{parentName:"li",href:"https://devops4solutions.com/setup-kubernetes-cluster-in-gcp/"},"Kubernetes Cluster")," configured"),(0,a.yg)("li",{parentName:"ol"},"Kubernetes\u2019 command-line tool, kubectl, which is the command-line interface for running commands against Kubernetes clusters."),(0,a.yg)("li",{parentName:"ol"},"Clone ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/devops4solutions/kubernetes-sample-deployment"},"this")," git repo for all the yaml files which we will be using in this blog")),(0,a.yg)("h3",{id:"agenda"},(0,a.yg)("strong",{parentName:"h3"},"Agenda"),":"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Create a Kubernetes Cluster"),(0,a.yg)("li",{parentName:"ol"},"Firewall Rules Configured"),(0,a.yg)("li",{parentName:"ol"},"Create a POD"),(0,a.yg)("li",{parentName:"ol"},"ClusterIp Service"),(0,a.yg)("li",{parentName:"ol"},"NodePort Service"),(0,a.yg)("li",{parentName:"ol"},"LoadBalancer Service")),(0,a.yg)("h3",{id:"create-a-kubernetes-cluster"},(0,a.yg)("strong",{parentName:"h3"},"Create a Kubernetes cluster")),(0,a.yg)("p",null,"To get more details about how to create, please follow ",(0,a.yg)("a",{parentName:"p",href:"https://devops4solutions.com/setup-kubernetes-cluster-in-gcp/"},"this")," blog.\xa0"),(0,a.yg)("h5",{id:"vpc-create"},"VPC Create"),(0,a.yg)("p",null,"gcloud compute networks create vpc-k8s"),(0,a.yg)("h5",{id:"firewall-rule-with-tag-cluster"},"Firewall rule with tag ",(0,a.yg)("inlineCode",{parentName:"h5"},"cluster"),"\xa0"),(0,a.yg)("p",null,"gcloud compute firewall-rules create allow-ext1 --allow tcp:22,tcp:6443,icmp --network vpc-k8s  --target-tags=cluster --source-ranges 0.0.0.0/0"),(0,a.yg)("h5",{id:"cluster-using-the-tag-cluster"},"Cluster using the tag ",(0,a.yg)("inlineCode",{parentName:"h5"},"cluster"),"\xa0"),(0,a.yg)("p",null,"gcloud container clusters create my-k8s-cluster --num-nodes 3 --network vpc-k8s --zone us-central1-a --tags cluster --scopes=storage-rw,compute-ro"),(0,a.yg)("p",null,"Cluster is ready and you can run some basic commands like ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get nodes"),"\xa0"),(0,a.yg)("h4",{id:"create-a-pod"},(0,a.yg)("strong",{parentName:"h4"},"Create a Pod")),(0,a.yg)("p",null,"This ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/devops4solutions/kubernetes-sample-deployment/blob/main/sample-pod.yaml"},"yaml")," file will create a pod using ",(0,a.yg)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/nikhilnidhi/samplewebapp"},"this")," docker image"),(0,a.yg)("p",null,"kind: Pod",(0,a.yg)("br",{parentName:"p"}),"\n","apiVersion: v1",(0,a.yg)("br",{parentName:"p"}),"\n","metadata:",(0,a.yg)("br",{parentName:"p"}),"\n","name: sampleweb",(0,a.yg)("br",{parentName:"p"}),"\n","labels:",(0,a.yg)("br",{parentName:"p"}),"\n","tier: frontend",(0,a.yg)("br",{parentName:"p"}),"\n","spec:",(0,a.yg)("br",{parentName:"p"}),"\n","containers:  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"name: sampleweb",(0,a.yg)("br",{parentName:"li"}),"image: nikhilnidhi/samplewebapp")),(0,a.yg)("p",null,"Apply the changes and check the pods details"),(0,a.yg)("p",null,"kubectl apply -f sample-pod.yaml",(0,a.yg)("br",{parentName:"p"}),"\n","kubectl get pods",(0,a.yg)("br",{parentName:"p"}),"\n","kubectl get pod -o wide"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*6oMa3AZfoedbsjvqfGwavQ.png",alt:null})),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*xy33AoPmyHtPF1V36VqU5g.png",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Each Kubernetes Pod gets its own IP address.\xa0"),(0,a.yg)("li",{parentName:"ul"},"used for pod-to-pod communication"),(0,a.yg)("li",{parentName:"ul"},"not for routing external traffic to pods")),(0,a.yg)("p",null,"\xa0Hence, you will not be able to access this IP outside the cluster."),(0,a.yg)("p",null,"Access the url from inside the pod using the ",(0,a.yg)("inlineCode",{parentName:"p"},"pod-ip")," and the ",(0,a.yg)("inlineCode",{parentName:"p"},"port")," on which your application is listening using below command:"),(0,a.yg)("p",null,"kubectl exec -it sampleweb -- sh",(0,a.yg)("br",{parentName:"p"}),"\n","curl 10.32.2.7:8080/LoginWebApp-1/"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"samplweb")," - podname"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"10.32.2.7")," - internal IP of the pod"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"8080")," - port on which my application is running"),(0,a.yg)("p",null,"This is how you can access your application from inside the pod."),(0,a.yg)("h3",{id:"kubernetes-services"},(0,a.yg)("strong",{parentName:"h3"},"Kubernetes Services")),(0,a.yg)("p",null,"Kubernetes provides a concept called a ",(0,a.yg)("strong",{parentName:"p"},"Service")," to abstract the network access to your application\u2019s pods.\xa0"),(0,a.yg)("p",null,"A Service acts as a network proxy to accept network traffic from external users and then distributes it to internal pods.\xa0"),(0,a.yg)("p",null,"How we will be create a relation between pods and services\xa0? How a service will know about the Pods?"),(0,a.yg)("p",null,"\xa0Kubernetes uses labels, which are defined in the pod definitions, and label selectors, which are defined in the Service definition, to describe this relationship."),(0,a.yg)("h5",{id:"types-of-services"},"Types of Services"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"ClusterIP\xa0"),(0,a.yg)("li",{parentName:"ol"},"NodePort\xa0"),(0,a.yg)("li",{parentName:"ol"},"LoadBalancer")),(0,a.yg)("h4",{id:"clusterip"},(0,a.yg)("strong",{parentName:"h4"},"ClusterIP")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"cluster-ip")," is the default service if you don\u2019t provide the type in yaml then this service will automatically get created."),(0,a.yg)("p",null,"It is good for debugging purposes"),(0,a.yg)("p",null,"Let\u2019s create a Service using ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/devops4solutions/kubernetes-sample-deployment/blob/main/sample-service-clusterIP.yaml"},"this")," file"),(0,a.yg)("p",null,"kind: Service",(0,a.yg)("br",{parentName:"p"}),"\n","apiVersion: v1",(0,a.yg)("br",{parentName:"p"}),"\n","metadata:",(0,a.yg)("br",{parentName:"p"}),"\n","name: sampleweb",(0,a.yg)("br",{parentName:"p"}),"\n","spec:",(0,a.yg)("br",{parentName:"p"}),"\n","selector:",(0,a.yg)("br",{parentName:"p"}),"\n","tier: frontend",(0,a.yg)("br",{parentName:"p"}),"\n","type: ClusterIP",(0,a.yg)("br",{parentName:"p"}),"\n","ports:  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"- port: 82  \n  targetPort: 8080\n")),(0,a.yg)("p",null,"Run the command"),(0,a.yg)("p",null,"kubectl apply -f sample-service-clusterIP.yaml"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*8o0ddQkAXzeE9fBPQxoprg.png",alt:null})),(0,a.yg)("p",null,"kubectl get pods --show-label"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*6Qd0JoOmT-kPnJHgGxSQIA.png",alt:null})),(0,a.yg)("p",null,"\xa0Check the Service\u200a\u2014\u200aYou should be able to see the service ",(0,a.yg)("inlineCode",{parentName:"p"},"sampleweb")),(0,a.yg)("p",null,"kubectl get svc"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*duQ7KJ1VKjV_2Q_fxT9WcA.png",alt:null})),(0,a.yg)("p",null,"Now we can access using the cluster IP of your service"),(0,a.yg)("p",null,"kubectl exec -it sampleweb -- sh",(0,a.yg)("br",{parentName:"p"}),"\n","curl ",(0,a.yg)("a",{parentName:"p",href:"http://10.35.246.29:82/LoginWebApp-1"},"http://10.35.246.29:82/LoginWebApp-1")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*Sv6tYYaPXgcuGClrF3nMSA.png",alt:null})),(0,a.yg)("h4",{id:"nodeport"},(0,a.yg)("strong",{parentName:"h4"},"NodePort")),(0,a.yg)("p",null,"Now we will create a ",(0,a.yg)("strong",{parentName:"p"},"NodePort")," Service to enable external users to access the internal pods without entering the cluster.\xa0"),(0,a.yg)("p",null,"If the nodes in your cluster have external IP addresses, find the external IP address of one of your nodes using below command:"),(0,a.yg)("p",null,"kubectl get nodes --output wide"),(0,a.yg)("p",null,"Let\u2019s create a NodePort Service using ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/devops4solutions/kubernetes-sample-deployment/blob/main/sample-service-nodeport.yaml"},"this")," file"),(0,a.yg)("p",null,"You can specify the nodePort also in the yaml file or you can let cluster automatically generated a port for you."),(0,a.yg)("p",null,"kind: Service",(0,a.yg)("br",{parentName:"p"}),"\n","apiVersion: v1",(0,a.yg)("br",{parentName:"p"}),"\n","metadata:",(0,a.yg)("br",{parentName:"p"}),"\n","name: sampleweb",(0,a.yg)("br",{parentName:"p"}),"\n","spec:",(0,a.yg)("br",{parentName:"p"}),"\n","selector:",(0,a.yg)("br",{parentName:"p"}),"\n","tier: frontend",(0,a.yg)("br",{parentName:"p"}),"\n","type: NodePort",(0,a.yg)("br",{parentName:"p"}),"\n","ports:  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"- port: 82  \n  targetPort: 8080\n")),(0,a.yg)("p",null,"Check the service"),(0,a.yg)("p",null,"kubectl get service"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*FphnSkcm4eVeUbNbwEdkeQ.png",alt:null})),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Port 30345"),"is an auto-generated port that\u2019s exposed on every node, which is done intentionally so that external users can access it."),(0,a.yg)("p",null,"For you to access it on the browser you need to open this port using below command\xa0"),(0,a.yg)("p",null,"gcloud compute firewall-rules update allow-ext1 --allow tcp:30345"),(0,a.yg)("p",null,"After this you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"node-externalip")," and browse it using below url"),(0,a.yg)("p",null,"http://node-externalip:30345/LoginWebApp-1"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*Cf1CwWDyCze0u6xu2dmxLQ.png",alt:null})),(0,a.yg)("p",null,"\xa0Under the hood, there are several layers of traffic transitions that make this happen:"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*Sn4R2R7ojvIHmaj6tuuZ4Q.png",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The first layer is from the external user to the machine IP at the auto-generated random port (30345)."),(0,a.yg)("li",{parentName:"ul"},"The second layer is from the random port (30345) to the Service IP (10.X.X.X) at port ",(0,a.yg)("strong",{parentName:"li"},"82"),"."),(0,a.yg)("li",{parentName:"ul"},"The third layer is from the Service IP (10.X.X.X) ultimately to the pod IP at port ",(0,a.yg)("strong",{parentName:"li"},"8080"),".")),(0,a.yg)("h4",{id:"loadbalancer"},(0,a.yg)("strong",{parentName:"h4"},"LoadBalancer")),(0,a.yg)("p",null,"Create a LoadBalancer service"),(0,a.yg)("p",null,"apiVersion: apps/v1",(0,a.yg)("br",{parentName:"p"}),"\n","kind: Deployment",(0,a.yg)("br",{parentName:"p"}),"\n","metadata:",(0,a.yg)("br",{parentName:"p"}),"\n","name: my-deployment-50001",(0,a.yg)("br",{parentName:"p"}),"\n","spec:",(0,a.yg)("br",{parentName:"p"}),"\n","selector:",(0,a.yg)("br",{parentName:"p"}),"\n","matchLabels:",(0,a.yg)("br",{parentName:"p"}),"\n","app: products",(0,a.yg)("br",{parentName:"p"}),"\n","department: sales",(0,a.yg)("br",{parentName:"p"}),"\n","replicas: 3",(0,a.yg)("br",{parentName:"p"}),"\n","template:",(0,a.yg)("br",{parentName:"p"}),"\n","metadata:",(0,a.yg)("br",{parentName:"p"}),"\n","labels:",(0,a.yg)("br",{parentName:"p"}),"\n","app: products",(0,a.yg)("br",{parentName:"p"}),"\n","department: sales",(0,a.yg)("br",{parentName:"p"}),"\n","spec:",(0,a.yg)("br",{parentName:"p"}),"\n","containers:  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'  - name: hello  \n    image: "gcr.io/google-samples/hello-app:2.0"  \n    env:  \n    - name: "PORT"  \n      value: "50001"\n')),(0,a.yg)("p",null,"Run the below command"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kubectl apply -f sample-deployment.yaml\n")),(0,a.yg)("p",null,"Create a service"),(0,a.yg)("p",null,"apiVersion: v1",(0,a.yg)("br",{parentName:"p"}),"\n","kind: Service",(0,a.yg)("br",{parentName:"p"}),"\n","metadata:",(0,a.yg)("br",{parentName:"p"}),"\n","name: my-lb-service",(0,a.yg)("br",{parentName:"p"}),"\n","spec:",(0,a.yg)("br",{parentName:"p"}),"\n","type: LoadBalancer",(0,a.yg)("br",{parentName:"p"}),"\n","selector:",(0,a.yg)("br",{parentName:"p"}),"\n","app: products",(0,a.yg)("br",{parentName:"p"}),"\n","department: sales",(0,a.yg)("br",{parentName:"p"}),"\n","ports:  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"protocol: TCP",(0,a.yg)("br",{parentName:"li"}),"port: 60000",(0,a.yg)("br",{parentName:"li"}),"targetPort: 50001")),(0,a.yg)("p",null,"Run the below command"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kubectl apply -f \n")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*TMBB4vYDuBCnfEAJYREjlg.png",alt:null})),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kubectl get service my-lb-service --output yaml\n")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*pHAKW049rBHQnJyLt91qLg.png",alt:null})),(0,a.yg)("p",null,"Wait a few minutes for GKE to configure the load balancer."),(0,a.yg)("p",null,"In your browser\u2019s address bar, enter the following:"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*q1_i7YEa2mzM0ZIXidLJig.png",alt:null})))}c.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},g=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(y,p(p({ref:t},g),{},{components:n})):r.createElement(y,p({ref:t},g))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var i=2;i<l;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);