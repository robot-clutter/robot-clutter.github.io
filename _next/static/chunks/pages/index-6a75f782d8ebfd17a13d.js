_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"/EDR":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("23aj")}])},"23aj":function(e,t,a){"use strict";a.r(t);var n=a("nKUr"),i=a("g4pe"),o=a.n(i),r=a("8wFF"),s=a("rePB"),l=a("YFqc"),c=a.n(l);var u=function(e){var t=e.title,a=e.abstract,i=e.slug,o=e.image;return Object(n.jsxs)("div",{className:"flex flex-col rounded-lg shadow-lg overflow-hidden",children:[Object(n.jsx)("div",{className:"flex-shrink-0",children:Object(n.jsx)(c.a,{href:"/".concat(i),children:Object(n.jsx)("img",{className:"h-48 w-full object-cover cursor-pointer",src:"PUBLIC_FOLDER"===o.src?"/".concat(o.path):o.path,alt:""})})}),Object(n.jsx)("div",{className:"flex-1 bg-gray-50 dark:bg-gray-800 p-6 flex flex-col justify-between",children:Object(n.jsxs)("div",{className:"flex-1",children:[Object(n.jsxs)("div",{className:"block mt-2",children:[Object(n.jsx)("p",{className:"text-xl font-semibold text-gray-900 dark:text-gray-300 text-left",children:Object(n.jsx)(c.a,{href:"/".concat(i),children:t})}),Object(n.jsx)("p",{className:"mt-3 text-base text-gray-500 dark:text-gray-400 text-left truncate",children:a})]}),Object(n.jsx)("p",{className:"text-left mt-6 font-medium text-cyan-600 dark:text-cyan-500 hover:underline",children:Object(n.jsx)(c.a,{href:"/".concat(i),children:"Read More"})})]})})]})};function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var h=function(e){var t=e.data;return Object(n.jsxs)("div",{className:"relative pt-10 pb-20 px-4 sm:px-6 lg:pt-14 lg:pb-28 lg:px-8",children:[Object(n.jsx)("div",{className:"absolute inset-0",children:Object(n.jsx)("div",{className:"bg-gray-50 dark:bg-gray-900 h-1/3 sm:h-2/3"})}),Object(n.jsxs)("div",{className:"relative max-w-7xl mx-auto",children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("h2",{className:"text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-300 sm:text-4xl",children:"Publications"})}),Object(n.jsx)("div",{className:"mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none",children:t.map((function(e){return Object(n.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e),e.slug)}))})]})]})},g=a("JoeT"),p=a("cOin"),b=a("iSez"),m=[g.a,p.a,b.a],f=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsxs)(o.a,{children:[Object(n.jsx)("title",{children:"Robot Clutter"}),Object(n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(n.jsx)(h,{data:m})]})})};f.layout=r.a;t.default=f},"72Ke":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}));var n,i=a("rePB"),o={IASON_SARANTOPOULOS:"IASON_SARANTOPOULOS",MARIOS_KIATOS:"MARIOS_KIATOS",ZOE_DOULGERI:"ZOE_DOULGERI",SOTIRIS_MALASIOTIS:"SOTIRIS_MALASIOTIS"},r=(n={},Object(i.a)(n,o.IASON_SARANTOPOULOS,{first_name:"Iason",last_name:"Sarantopoulos",url:"https://arl.ee.auth.gr/people/sarantopoulos/"}),Object(i.a)(n,o.MARIOS_KIATOS,{first_name:"Marios",last_name:"Kiatos",url:""}),Object(i.a)(n,o.ZOE_DOULGERI,{first_name:"Zoe",last_name:"Doulgeri",url:"https://arl.ee.auth.gr/people/doulgeri/"}),Object(i.a)(n,o.SOTIRIS_MALASIOTIS,{first_name:"Sotiris",last_name:"Malassiotis",url:""}),n)},JoeT:function(e,t,a){"use strict";var n=a("72Ke"),i={slug:"dqn",title:"Robust object grasping in clutter via singulation",image:{src:"PUBLIC_FOLDER",path:"dqn_header_image.jpg",width:1040,height:975},type:"2019 IEEE International Conference on Robotics and Automation",authors:[n.a.MARIOS_KIATOS,n.a.SOTIRIS_MALASIOTIS],abstract:"Grasping objects in a cluttered environment is challenging due to the lack of collision free grasp affordances. In such conditions, the target object touches or is covered by other objects in the scene, resulting in a failed grasp. To address this problem, we propose a strategy of singulating the object from its surrounding clutter, which consists of previously unseen objects, by means of lateral pushing movements. We employ reinforcement learning for obtaining optimal push policies given depth observations of the scene. The action-value function(Q-function) is approximated with a deep neural network. We train the robot in simulation and we demonstrate that the transfer of learned policies to the real environment is robust.",video:"https://www.youtube.com/watch?v=nj2FxaUCA5c",code:[{link:"https://ieeexplore.ieee.org/document/8793972",alias:"IEEEXplore",type:"manuscript"}],bib:"@inproceedings{singulation19,\nauthor={M. {Kiatos} and S. {Malassiotis}},\nbooktitle={2019 International Conference on Robotics and Automation (ICRA)},\ntitle={Robust object grasping in clutter via singulation},\nyear={2019},\nvolume={},\nnumber={},\npages={1596-1600},\ndoi={10.1109/ICRA.2019.8793972}}"};t.a=i},cOin:function(e,t,a){"use strict";var n=a("72Ke"),i={slug:"split-dqn",title:"Split Deep Q-Learning for Robust Object Singulation",image:{src:"PUBLIC_FOLDER",path:"split_dqn_header_image.jpg",width:1040,height:975},type:"2020 IEEE International Conference on Robotics and Automation",authors:[n.a.IASON_SARANTOPOULOS,n.a.MARIOS_KIATOS,n.a.ZOE_DOULGERI,n.a.SOTIRIS_MALASIOTIS],abstract:"Extracting a known target object from a pile of other objects in a cluttered environment is a challenging robotic manipulation task encountered in many robotic applications. In such conditions, the target object touches or is covered by adjacent obstacle objects, thus rendering traditional grasping techniques ineffective. In this paper, we propose a pushing policy aiming at singulating the target object from its surrounding clutter, by means of lateral pushing movements of both the neighboring objects and the target object until sufficient 'grasping room' has been achieved. To achieve the above goal we employ reinforcement learning and particularly Deep Q-learning (DQN) to learn optimal push policies by trial and error. A novel Split DQN is proposed to improve the learning rate and increase the modularity of the algorithm. Experiments show that although learning is performed in a simulated environment the transfer of learned policies to a real environment is effective thanks to robust feature selection. Finally, we demonstrate that the modularity of the algorithm allows the addition of extra primitives without retraining the model from scratch.",video:"https://www.youtube.com/watch?v=ef1MKgVkN0E",code:[{link:"https://ieeexplore.ieee.org/document/9196647",alias:"IEEEXplore",type:"manuscript"},{link:"https://arxiv.org/abs/1909.08105",alias:"Arxiv",type:"manuscript"},{link:"https://github.com/robot-clutter/robot-clutter.github.io",alias:"Source Code",type:"code",disabled:!0,disabledText:"Source code is not available yet. Please check again later."}],bib:"@inproceedings{splitdqn20,\n  title={Split Deep Q-Learning for Robust Object Singulation},\n  author={Sarantopoulos, Iason and Kiatos, Marios and Doulgeri, Zoe and Malassiotis, Sotiris},\n  booktitle={2020 IEEE International Conference on Robotics and Automation (ICRA)},\n  pages={6225--6231},\n  year={2020},\n  organization={IEEE}\n}"};t.a=i},iSez:function(e,t,a){"use strict";var n=a("72Ke"),i={slug:"modular-rl",title:"Total Singulation with Modular Reinforcement Learning",image:{src:"PUBLIC_FOLDER",path:"modular_rl_header_image.png",width:1040,height:975},type:"IEEE Robotics and Automation Letters (2021)",authors:[n.a.IASON_SARANTOPOULOS,n.a.MARIOS_KIATOS,n.a.ZOE_DOULGERI,n.a.SOTIRIS_MALASIOTIS],abstract:"Prehensile robotic grasping of a target object in clutter is challenging because, in such conditions, the target touches other objects, resulting to the lack of collision free grasp affordances. To address this problem, we propose a modular reinforcement learning method which uses continuous actions to totally singulate the target object from its surrounding clutter. A high level policy selects between pushing primitives, which are learned separately. Prior knowledge is effectively incorporated into learning, through action primitives and feature selection increasing sample efficiency. Experiments demonstrate that the proposed method considerably outperforms the state-of-the-art methods in the singulation task. Furthermore, although training is performed in simulation the learned policy is robustly transferred to a real environment without a significant drop in success rate. Finally, singulation tasks in different environments are addressed by easily adding a new primitive and by retraining only the high level policy.",video:"https://www.youtube.com/watch?v=RZlDe-v3bok",code:[{link:"https://ieeexplore.ieee.org/document/9363569",alias:"IEEEXplore",type:"manuscript"},{link:"https://github.com/robot-clutter/robot-clutter.github.io",alias:"Source Code",type:"code",disabled:!0,disabledText:"Source code is not available yet. Please check again later."}],bib:"@ARTICLE{modularrl21,\n  author={I. {Sarantopoulos} and M. {Kiatos} and Z. {Doulgeri} and S. {Malassiotis}},\n  journal={IEEE Robotics and Automation Letters}, \n  title={Total Singulation with Modular Reinforcement Learning}, \n  year={2021},\n  volume={},\n  number={},\n  pages={1-1},\n  doi={10.1109/LRA.2021.3062295}}"};t.a=i},rePB:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))}},[["/EDR",0,2,1,3]]]);