"use strict";(self.webpackChunkdevops4solution=self.webpackChunkdevops4solution||[]).push([[282],{1873:(e,n,t)=>{t(6540)},2020:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(8168),r=(t(6540),t(5680));t(1873);const i={title:"Kubernetes Pods Health Check using Liveness and Readiness",date:"2020-12-17",categories:["kubernetes"]},l=void 0,o={unversionedId:"Kubernetes/Kubernetes-pods",id:"Kubernetes/Kubernetes-pods",title:"Kubernetes Pods Health Check using Liveness and Readiness",description:"In this blog, we will explore how to check the health of the Kubernetes pods using Liveness and Readiness Probe.",source:"@site/docs/Kubernetes/Kubernetes-pods.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/Kubernetes-pods",permalink:"/docs/Kubernetes/Kubernetes-pods",draft:!1,editUrl:"https://devops4solutions.com/docs/edit/main/docs/Kubernetes/Kubernetes-pods.md",tags:[],version:"current",frontMatter:{title:"Kubernetes Pods Health Check using Liveness and Readiness",date:"2020-12-17",categories:["kubernetes"]},sidebar:"tutorialSidebar",previous:{title:"ansible-setup",permalink:"/docs/Ansible/ansible-setup"},next:{title:"configmaps",permalink:"/docs/Kubernetes/configmaps"}},s={},p=[{value:"<strong>Prerequisite</strong>:",id:"prerequisite",level:3},{value:"<strong>Agenda</strong>:",id:"agenda",level:3},{value:"Probes/Health Checks",id:"probeshealth-checks",level:3},{value:"Pod with a Liveness Probe and No Restart\xa0Policy",id:"pod-with-a-liveness-probe-and-no-restartpolicy",level:3},{value:"Creating a Pod Running a Container with a Liveness Probe and a Restart\xa0Policy",id:"creating-a-pod-running-a-container-with-a-liveness-probe-and-a-restartpolicy",level:3},{value:"<strong>Readiness Probe</strong>",id:"readiness-probe",level:3},{value:"Creating a Pod Running a Container with a Readiness Probe",id:"creating-a-pod-running-a-container-with-a-readiness-probe",level:3},{value:"<strong>Best Practices while using Probes</strong>",id:"best-practices-while-using-probes",level:3}],u={toc:p},g="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In this blog, we will explore how to check the health of the Kubernetes pods using Liveness and Readiness Probe."),(0,r.yg)("p",null,"Check out my ",(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/koSCPUlzkgM"},"YouTube")," video on this blog."),(0,r.yg)("p",null,"If you are not familiar with basics of Kubernetes pod, please check my ",(0,r.yg)("a",{parentName:"p",href:"https://devops4solutions.com/kubernetes-pods-explained-with-examples/"},"blog")),(0,r.yg)("h3",{id:"prerequisite"},(0,r.yg)("strong",{parentName:"h3"},"Prerequisite"),":"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Functional ",(0,r.yg)("a",{parentName:"li",href:"https://devops4solutions.com/setup-kubernetes-cluster-in-gcp/"},"Kubernetes Cluster")," configured"),(0,r.yg)("li",{parentName:"ol"},"Kubernetes\u2019 command-line tool, kubectl, which is the command-line interface for running commands against Kubernetes clusters."),(0,r.yg)("li",{parentName:"ol"},"Clone ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/devops4solutions/kubernetes-sample-deployment"},"this")," git repo for all the yaml files which we will be using in this blog")),(0,r.yg)("h3",{id:"agenda"},(0,r.yg)("strong",{parentName:"h3"},"Agenda"),":"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"What is Probes/Health Check"),(0,r.yg)("li",{parentName:"ol"},"Pod with a Liveness Probe and No Restart Policy"),(0,r.yg)("li",{parentName:"ol"},"Creating a Pod Running a Container with a Liveness Probe and a Restart Policy"),(0,r.yg)("li",{parentName:"ol"},"Creating a Pod Running a Container with a Readiness Probe")),(0,r.yg)("h3",{id:"probeshealth-checks"},"Probes/Health Checks"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"It can be configured to check the health of the containers running in a pod."),(0,r.yg)("li",{parentName:"ul"},"used to determine whether a container is running or ready to receive requests")),(0,r.yg)("p",null,"A probe/health check may return the following results:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Success"),": The container passed the health check."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Failure"),": The container failed the health check."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Unknown"),": The health check failed for unknown reasons."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Types of Probes")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Liveness Probe"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"used to determine whether a particular container is running or not."),(0,r.yg)("li",{parentName:"ul"},"If a container fails the liveness probe, the controller will try to restart the pod on the same node according to the restart policy configured for the pod.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Restart Policy")),(0,r.yg)("p",null,"We can define the restart Policy in the pod to instruct the controller about the conditions required to restart the Pod"),(0,r.yg)("p",null,"Default value is ",(0,r.yg)("inlineCode",{parentName:"p"},"always"),"\xa0"),(0,r.yg)("p",null,"Values for the ",(0,r.yg)("inlineCode",{parentName:"p"},"Restart Policy")," as follows"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Always"),": Always restart the pod when it terminates."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"OnFailure"),": Restart the pod only when it terminates with failure."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Never"),": Never restart the pod after it terminates.")),(0,r.yg)("h3",{id:"pod-with-a-liveness-probe-and-no-restartpolicy"},"Pod with a Liveness Probe and No Restart\xa0Policy"),(0,r.yg)("p",null,"In this yaml file we will define the Liveness Probe and no restart Policy."),(0,r.yg)("p",null,"If we don\u2019t specify the restart Policy then by default it is ",(0,r.yg)("inlineCode",{parentName:"p"},"always"),"\xa0"),(0,r.yg)("p",null,"kind: Pod",(0,r.yg)("br",{parentName:"p"}),"\n","apiVersion: v1",(0,r.yg)("br",{parentName:"p"}),"\n","metadata:",(0,r.yg)("br",{parentName:"p"}),"\n","name: liveness-probe",(0,r.yg)("br",{parentName:"p"}),"\n","spec:",(0,r.yg)("br",{parentName:"p"}),"\n","containers:  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"name: ubuntu-container",(0,r.yg)("br",{parentName:"li"}),"image: ubuntu",(0,r.yg)("br",{parentName:"li"}),"command:  ",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"- /bin/bash  \n- -ec  \n- touch /tmp/live; sleep 30; rm /tmp/live; sleep 600  \n")),"**livenessProbe:",(0,r.yg)("br",{parentName:"li"}),"exec:",(0,r.yg)("br",{parentName:"li"}),"command:  ",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"    - cat  \n    - /tmp/live  \n")),"   initialDelaySeconds: 5",(0,r.yg)("br",{parentName:"li"}),"periodSeconds:** 5")),(0,r.yg)("p",null,"Pod configuration"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Creating a container with ubuntu image"),(0,r.yg)("li",{parentName:"ul"},"When container starts it will create a file ",(0,r.yg)("inlineCode",{parentName:"li"},"/tmp/live")," then sleep for 30 seconds and at last remove the file ",(0,r.yg)("inlineCode",{parentName:"li"},"/tmp/live"),"\xa0"),(0,r.yg)("li",{parentName:"ul"},"This means the file will be available only for 30 seconds and after that it is no longer available in the container"),(0,r.yg)("li",{parentName:"ul"},"In liveness configuration\u200a\u2014\u200aIt will try to find the file every 5 seconds with an initial delay of 5 seconds")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"initalDelaySeonds"),"\xa0: Number of seconds controller will wait before launching the probe"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"periodSeconds"),"\xa0: Number of seconds after which the probe will be repeated periodically"),(0,r.yg)("p",null,"Create a pod"),(0,r.yg)("p",null,"kubectl create -f liveness-probe.yaml",(0,r.yg)("br",{parentName:"p"}),"\n","kubectl describe pod liveness-probe"),(0,r.yg)("p",null,"You will see the ",(0,r.yg)("inlineCode",{parentName:"p"},"liveness-probe")," is succeed because the command is executed successfully"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/880/1*PzA6qZ3Pu3Y2Fx6zvXzluA.png",alt:null})),(0,r.yg)("p",null,"Now wait for 30 seconds and the run the below command"),(0,r.yg)("p",null,"kubectl describe pod liveness-probe"),(0,r.yg)("p",null,"You will see that ",(0,r.yg)("inlineCode",{parentName:"p"},"liveness-probe")," has failed"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/880/1*9Iicnht9buTm0nUw6pChPQ.png",alt:null})),(0,r.yg)("p",null,"Now you can see that container is restarting again and again because of the default Restart policy"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/880/1*MqIROvrFxCl-Ydf9Ftb2Kw.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/880/1*vuHr5HdXtaMKDbXQirN4DA.png",alt:null})),(0,r.yg)("h3",{id:"creating-a-pod-running-a-container-with-a-liveness-probe-and-a-restartpolicy"},"Creating a Pod Running a Container with a Liveness Probe and a Restart\xa0Policy"),(0,r.yg)("p",null,"Now we will use the same pod configuration but with Restart policy as ",(0,r.yg)("inlineCode",{parentName:"p"},"Never"),"\xa0"),(0,r.yg)("p",null,"kind: Pod",(0,r.yg)("br",{parentName:"p"}),"\n","apiVersion: v1",(0,r.yg)("br",{parentName:"p"}),"\n","metadata:",(0,r.yg)("br",{parentName:"p"}),"\n","name: liveness-probe-never-restart",(0,r.yg)("br",{parentName:"p"}),"\n","spec:",(0,r.yg)("br",{parentName:"p"}),"\n","",(0,r.yg)("strong",{parentName:"p"},"restartPolicy: Never"),(0,r.yg)("br",{parentName:"p"}),"\n","containers:  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"name: ubuntu-container",(0,r.yg)("br",{parentName:"li"}),"image: ubuntu",(0,r.yg)("br",{parentName:"li"}),"command:  ",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"- /bin/bash  \n- -ec  \n- touch /tmp/live; sleep 30; rm /tmp/live; sleep 100  \n")),"livenessProbe:",(0,r.yg)("br",{parentName:"li"}),"exec:",(0,r.yg)("br",{parentName:"li"}),"command:  ",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"    - cat  \n    - /tmp/live  \n")),"   initialDelaySeconds: 5",(0,r.yg)("br",{parentName:"li"}),"periodSeconds: 5")),(0,r.yg)("p",null,"Create a pod"),(0,r.yg)("p",null,"kubectl create -f liveness-probe-with-restart-policy.yaml"),(0,r.yg)("p",null,"Wait for a minute and then run the below command"),(0,r.yg)("p",null,"kubectl describe pod liveness-probe-never-restart"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/880/1*At39lEurCRcXGaHqpZYxnw.png",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/880/1*BWq_UW30BkT5W1SvBQIGbQ.png",alt:null})),(0,r.yg)("p",null,"From the output you can see that controller killed the container and never attempted to restart the Pod."),(0,r.yg)("h3",{id:"readiness-probe"},(0,r.yg)("strong",{parentName:"h3"},"Readiness Probe")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"used to determine whether a particular container is ready to receive requests or not."),(0,r.yg)("li",{parentName:"ul"},"For ex- A container which serving a web-application, readiness mean that container has loaded all the static assets, database connection, started the webserver and opened a port to start serving request")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"What happen if container fails its readiness probe\xa0?")),(0,r.yg)("p",null,"Kubernetes controller will ensure that the pod doesn\u2019t receive any requests."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Readiness Probe States")),(0,r.yg)("p",null,"Failure\u200a\u2014\u200ais the default state until the readiness probe succeeds.\xa0"),(0,r.yg)("p",null,"Success- The container will start receiving requests only after the readiness probe returns with the ",(0,r.yg)("strong",{parentName:"p"},"Success")," state.\xa0"),(0,r.yg)("p",null,"If no readiness probe is configured, the container will start receiving requests as soon as it starts."),(0,r.yg)("h3",{id:"creating-a-pod-running-a-container-with-a-readiness-probe"},"Creating a Pod Running a Container with a Readiness Probe"),(0,r.yg)("p",null,"In this yaml file we will define the Readiness Probe\xa0"),(0,r.yg)("p",null,"kind: Pod",(0,r.yg)("br",{parentName:"p"}),"\n","apiVersion: v1",(0,r.yg)("br",{parentName:"p"}),"\n","metadata:",(0,r.yg)("br",{parentName:"p"}),"\n","name: readiness-probe",(0,r.yg)("br",{parentName:"p"}),"\n","spec:",(0,r.yg)("br",{parentName:"p"}),"\n","containers:  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"name: ubuntu-container",(0,r.yg)("br",{parentName:"li"}),"image: ubuntu",(0,r.yg)("br",{parentName:"li"}),"command:  ",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"- /bin/bash  \n- -ec  \n- sleep 30; touch /tmp/ready; sleep 600  \n")),"readinessProbe:",(0,r.yg)("br",{parentName:"li"}),"exec:",(0,r.yg)("br",{parentName:"li"}),"command:  ",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"    - cat  \n    - /tmp/ready  \n")),"   initialDelaySeconds: 10",(0,r.yg)("br",{parentName:"li"}),"periodSeconds: 5")),(0,r.yg)("p",null,"Pod configuration"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Creating a container with ubuntu image"),(0,r.yg)("li",{parentName:"ul"},"When container starts it will sleep for 30 seconds and then create file ",(0,r.yg)("inlineCode",{parentName:"li"},"/tmp/ready")),(0,r.yg)("li",{parentName:"ul"},"This means the file will be available only after 30 seconds"),(0,r.yg)("li",{parentName:"ul"},"In readiness configuration\u200a\u2014\u200aIt will try to find the file every 5 seconds with an initial delay of 10 seconds")),(0,r.yg)("p",null,"Create a pod"),(0,r.yg)("p",null,"kubectl create -f readiness-probe.yaml",(0,r.yg)("br",{parentName:"p"}),"\n","kubectl get pod readiness-probe",(0,r.yg)("br",{parentName:"p"}),"\n","kubectl describe pod readiness-probe"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/880/1*PHAMjm5lQJaXi5mg0g3h2A.png",alt:null})),(0,r.yg)("p",null,"Wait for a minute and then run the below command"),(0,r.yg)("p",null,"kubectl describe pod readiness-probe"),(0,r.yg)("h3",{id:"best-practices-while-using-probes"},(0,r.yg)("strong",{parentName:"h3"},"Best Practices while using Probes")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Liveness Probes")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"initialDelaySeconds"),"\xa0: should be more then the application start up time so that container doesn\u2019t get stuck in a restart Loop"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Readiness Probes")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"initialDelaySeconds"),"\xa0: could be small because we want to enable the traffic to the pod as soon as container is ready"))}c.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(t),d=r,y=g["".concat(s,".").concat(d)]||g[d]||c[d]||i;return t?a.createElement(y,l(l({ref:n},u),{},{components:t})):a.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);