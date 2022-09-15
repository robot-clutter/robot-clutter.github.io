(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(50837)}])},89604:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var i=a(85893),n=a(67294),r=a(72204),o=a(82010),s=a(41664),l=a.n(s);var c=function(){var e=(0,o.F)(),t=e.setTheme,a=e.resolvedTheme,s=(0,n.useState)(!1),c=s[0],h=s[1];(0,n.useEffect)((function(){return h(!0)}),[]);var d="dark"===a;return(0,i.jsx)("nav",{className:"bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-500",children:(0,i.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"flex justify-between h-16",children:[(0,i.jsx)("div",{className:"flex",children:(0,i.jsx)("div",{className:"flex-shrink-0 flex items-center",children:c&&(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)("img",{className:"block h-12 w-auto cursor-pointer",src:d?"logo-white.svg":"logo-black.svg",alt:"Workflow"})})})}),(0,i.jsx)("div",{className:"ml-6 flex items-center",children:c&&(0,i.jsx)(r.DarkModeSwitch,{checked:d,onChange:function(e){t(e?"dark":"light")}})})]})})})},h=function(e){var t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),t]})}},58848:function(e,t,a){"use strict";a.d(t,{c:function(){return r},r:function(){return o}});var i,n=a(14924),r={IASON_SARANTOPOULOS:"IASON_SARANTOPOULOS",MARIOS_KIATOS:"MARIOS_KIATOS",ZOE_DOULGERI:"ZOE_DOULGERI",SOTIRIS_MALASSIOTIS:"SOTIRIS_MALASSIOTIS",LEONIDAS_KOUTRAS:"LEONIDAS_KOUTRAS"},o=(i={},(0,n.Z)(i,r.IASON_SARANTOPOULOS,{first_name:"Iason",last_name:"Sarantopoulos",url:"https://arl.ee.auth.gr/people/sarantopoulos/"}),(0,n.Z)(i,r.MARIOS_KIATOS,{first_name:"Marios",last_name:"Kiatos",url:"https://scholar.google.com/citations?user=VBOCox4AAAAJ"}),(0,n.Z)(i,r.ZOE_DOULGERI,{first_name:"Zoe",last_name:"Doulgeri",url:"https://arl.ee.auth.gr/people/doulgeri/"}),(0,n.Z)(i,r.SOTIRIS_MALASSIOTIS,{first_name:"Sotiris",last_name:"Malassiotis",url:"https://scholar.google.com/citations?user=icuzuYgAAAAJ"}),(0,n.Z)(i,r.LEONIDAS_KOUTRAS,{first_name:"Leonidas",last_name:"Koutras",url:"https://arl.ee.auth.gr/people/koutras/"}),i)},98453:function(e,t,a){"use strict";var i=a(58848),n={slug:"bridging-the-gap",title:"Bridging the gap between learning and heuristic based pushing policies",year:"2021",is_hidden:!0,image:{src:"PUBLIC_FOLDER",path:"bridging_the_gap_header_image.jpg",width:1040,height:975},journal:"Preprint",journal_small:"Preprint",authors:[i.c.MARIOS_KIATOS,i.c.IASON_SARANTOPOULOS,i.c.SOTIRIS_MALASSIOTIS,i.c.ZOE_DOULGERI],abstract:"Non-prehensile pushing actions have the potential to singulate a target object from its surrounding clutter in order to facilitate the robotic grasping of the target. To address this problem we utilize a heuristic rule that moves the target object towards the workspace's empty space and demonstrate that this simple heuristic rule achieves singulation. Furthermore, we incorporate this heuristic rule to the reward in order to train more efficiently reinforcement learning (RL) agents for singulation. Simulation experiments demonstrate that this insight increases performance. Finally, our results show that the RL-based policy implicitly learns something similar to one of the used heuristics in terms of decision making.",videos:[],code:[{link:"https://arxiv.org/abs/2111.11156",alias:"arXiv",type:"manuscript"},{link:"https://github.com/robot-clutter/bridging_the_gap",alias:"Source Code",type:"code",disabled:!1,disabledText:"Source code is not available yet. Please check again later."}],bib:"@article{bridging-the-gap,\n    title={Bridging the gap between learning and heuristic based pushing policies},\n    author={Kiatos, Marios and Sarantopoulos, Iason and Malassiotis, Sotiris and Doulgeri, Zoe},\n    journal={arXiv preprint arXiv:2111.11156},\n    year={2021}\n  }"};t.Z=n},33618:function(e,t,a){"use strict";var i=a(58848),n={slug:"dqn",title:"Robust object grasping in clutter via singulation",year:"2019",image:{src:"PUBLIC_FOLDER",path:"dqn_header_image.jpg",width:1040,height:975},journal:"IEEE International Conference on Robotics and Automation",journal_small:"ICRA",authors:[i.c.MARIOS_KIATOS,i.c.SOTIRIS_MALASSIOTIS],abstract:"Grasping objects in a cluttered environment is challenging due to the lack of collision free grasp affordances. In such conditions, the target object touches or is covered by other objects in the scene, resulting in a failed grasp. To address this problem, we propose a strategy of singulating the object from its surrounding clutter, which consists of previously unseen objects, by means of lateral pushing movements. We employ reinforcement learning for obtaining optimal push policies given depth observations of the scene. The action-value function(Q-function) is approximated with a deep neural network. We train the robot in simulation and we demonstrate that the transfer of learned policies to the real environment is robust.",videos:["https://www.youtube.com/watch?v=nj2FxaUCA5c"],code:[{link:"https://ieeexplore.ieee.org/document/8793972",alias:"IEEEXplore",type:"manuscript"}],bib:"@inproceedings{singulation19,\nauthor={M. {Kiatos} and S. {Malassiotis}},\nbooktitle={2019 International Conference on Robotics and Automation (ICRA)},\ntitle={Robust object grasping in clutter via singulation},\nyear={2019},\nvolume={},\nnumber={},\npages={1596-1600},\ndoi={10.1109/ICRA.2019.8793972}}"};t.Z=n},93936:function(e,t,a){"use strict";var i=a(58848),n={slug:"modular-rl",title:"Total Singulation with Modular Reinforcement Learning",year:"2021",image:{src:"PUBLIC_FOLDER",path:"modular_rl_header_image.png",width:1040,height:975},journal:"IEEE Robotics and Automation Letters",journal_small:"RAL",authors:[i.c.IASON_SARANTOPOULOS,i.c.MARIOS_KIATOS,i.c.ZOE_DOULGERI,i.c.SOTIRIS_MALASSIOTIS],abstract:"Prehensile robotic grasping of a target object in clutter is challenging because, in such conditions, the target touches other objects, resulting to the lack of collision free grasp affordances. To address this problem, we propose a modular reinforcement learning method which uses continuous actions to totally singulate the target object from its surrounding clutter. A high level policy selects between pushing primitives, which are learned separately. Prior knowledge is effectively incorporated into learning, through action primitives and feature selection increasing sample efficiency. Experiments demonstrate that the proposed method considerably outperforms the state-of-the-art methods in the singulation task. Furthermore, although training is performed in simulation the learned policy is robustly transferred to a real environment without a significant drop in success rate. Finally, singulation tasks in different environments are addressed by easily adding a new primitive and by retraining only the high level policy.",videos:["https://www.youtube.com/watch?v=RZlDe-v3bok","https://youtu.be/Ke0L5R-y-_Q"],code:[{link:"https://ieeexplore.ieee.org/document/9363569",alias:"IEEEXplore",type:"manuscript"},{link:"https://github.com/robot-clutter/robot-clutter.github.io",alias:"Source Code",type:"code",disabled:!0,disabledText:"Source code is not available yet. Please check again later."}],bib:"@ARTICLE{modularrl21,\n  author={I. {Sarantopoulos} and M. {Kiatos} and Z. {Doulgeri} and S. {Malassiotis}},\n  journal={IEEE Robotics and Automation Letters}, \n  title={Total Singulation with Modular Reinforcement Learning}, \n  year={2021},\n  volume={},\n  number={},\n  pages={1-1},\n  doi={10.1109/LRA.2021.3062295}}"};t.Z=n},25614:function(e,t,a){"use strict";var i=a(58848),n={slug:"ppg",title:"Learning Push-Grasping in Dense Clutter",year:"2022",is_hidden:!1,image:{src:"PUBLIC_FOLDER",path:"push_grasping_header_image.png",width:440,height:467},journal:"",journal_small:"IEEE RAL",authors:[i.c.MARIOS_KIATOS,i.c.IASON_SARANTOPOULOS,i.c.LEONIDAS_KOUTRAS,i.c.SOTIRIS_MALASSIOTIS,i.c.ZOE_DOULGERI],github:"https://github.com/mkiatos/power-push-grasping",abstract:"Robotic grasping in highly cluttered environments remains a challenging task due to the lack of collision free grasp affordances. In such conditions, non-prehensile actions could help to increase such affordances. We propose a multi-fingered push-grasping policy that creates enough space for the fingers to wrap around an object to perform a stable power grasp, using a single primitive action. Our approach learns a direct mapping from visual observations to actions and is trained in a fully end-to-end manner. To achieve a more efficient learning, we decouple the action space by learning separately the robot hand pose and finger configuration. Experiments in simulation demonstrate that the proposed push-grasping policy achieves higher grasp success rate over baselines and that can generalize to unseen objects. Furthermore, although training is performed in simulation the learned policy is robustly transferred to a real environment without a significant drop in success rate.",abstract2:"The video and the images illustrate the different ways that a push-grasping primitive can create free space around an object in order to establish a stable power grasp in clutter. A proper push-grasping can roll-in an object within the palm of the hand and roll out or translate other objects away from the hand\u2019s closing region.",videos:["task.mp4"],summary_video:["ral_video.mp4"],example_videos:["e22_cropped_01.mp4","e10_cropped_02.mp4","e20_cropped_03.mp4"],example_videos2:["e17_cropped.mp4","e8_cropped_05.mp4","e23_cropped_06.mp4"],failure_videos:["e15_cropped_f1.mp4","e24_cropped_f2.mp4"],code:[{link:"https://ieeexplore.ieee.org/document/9815129",alias:"IEEEXplore",type:"manuscript"},{link:"https://github.com/mkiatos/power-push-grasping",alias:"Github Repo",type:"code"}],bib:"@ARTICLE{9815129,\nauthor={Kiatos, Marios and Sarantopoulos, Iason and Koutras, Leonidas and Malassiotis, Sotiris and Doulgeri, Zoe},\njournal={IEEE Robotics and Automation Letters}, \ntitle={Learning Push-Grasping in Dense Clutter}, \nyear={2022},\nvolume={},\nnumber={},\npages={1-8},\ndoi={10.1109/LRA.2022.3188437}}"};t.Z=n},92254:function(e,t,a){"use strict";var i=a(58848),n={slug:"split-dqn",title:"Split Deep Q-Learning for Robust Object Singulation",year:"2020",image:{src:"PUBLIC_FOLDER",path:"split_dqn_header_image.jpg",width:1040,height:975},journal:"IEEE International Conference on Robotics and Automation",journal_small:"ICRA",authors:[i.c.IASON_SARANTOPOULOS,i.c.MARIOS_KIATOS,i.c.ZOE_DOULGERI,i.c.SOTIRIS_MALASSIOTIS],abstract:"Extracting a known target object from a pile of other objects in a cluttered environment is a challenging robotic manipulation task encountered in many robotic applications. In such conditions, the target object touches or is covered by adjacent obstacle objects, thus rendering traditional grasping techniques ineffective. In this paper, we propose a pushing policy aiming at singulating the target object from its surrounding clutter, by means of lateral pushing movements of both the neighboring objects and the target object until sufficient 'grasping room' has been achieved. To achieve the above goal we employ reinforcement learning and particularly Deep Q-learning (DQN) to learn optimal push policies by trial and error. A novel Split DQN is proposed to improve the learning rate and increase the modularity of the algorithm. Experiments show that although learning is performed in a simulated environment the transfer of learned policies to a real environment is effective thanks to robust feature selection. Finally, we demonstrate that the modularity of the algorithm allows the addition of extra primitives without retraining the model from scratch.",videos:["https://www.youtube.com/watch?v=ef1MKgVkN0E"],code:[{link:"https://ieeexplore.ieee.org/document/9196647",alias:"IEEEXplore",type:"manuscript"},{link:"https://arxiv.org/abs/1909.08105",alias:"arXiv",type:"manuscript"},{link:"https://github.com/robot-clutter/robot-clutter.github.io",alias:"Source Code",type:"code",disabled:!0,disabledText:"Source code is not available yet. Please check again later."}],bib:"@inproceedings{splitdqn20,\n  title={Split Deep Q-Learning for Robust Object Singulation},\n  author={Sarantopoulos, Iason and Kiatos, Marios and Doulgeri, Zoe and Malassiotis, Sotiris},\n  booktitle={2020 IEEE International Conference on Robotics and Automation (ICRA)},\n  pages={6225--6231},\n  year={2020},\n  organization={IEEE}\n}"};t.Z=n},50837:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var i=a(85893),n=a(9008),r=a.n(n),o=a(89604),s=a(41664),l=a.n(s);var c=function(){return(0,i.jsxs)("div",{className:"relative pt-10 px-4 sm:px-6 lg:pt-14 lg:px-8",children:[(0,i.jsx)("div",{className:"absolute inset-0",children:(0,i.jsx)("div",{className:"bg-gray-50 dark:bg-gray-900 h-1/3 sm:h-2/3"})}),(0,i.jsxs)("div",{className:"relative max-w-7xl mx-auto",children:[(0,i.jsx)("div",{className:"text-center",children:(0,i.jsx)("h2",{className:"text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-300 sm:text-4xl",children:"Learning-based robotic manipulation in cluttered environments"})}),(0,i.jsxs)("div",{className:"text-justify mt-10 text-xl",children:["In this project, we aim to research and develop learning-based methods for manipulating objects in cluttered environments. During this project a number of publications have been produced and are listed below. Furthermore, the software developed for these methods is open source and can be found in our\xa0",(0,i.jsx)("span",{className:"mt-6 font-medium text-cyan-600 dark:text-cyan-500 hover:underline",children:(0,i.jsx)(l(),{href:"https://github.com/robot-clutter",children:(0,i.jsx)("a",{target:"_blank",rel:"noreferrer",children:"github repos"})})}),"\xa0along with its\xa0",(0,i.jsx)("span",{className:"mt-6 font-medium text-cyan-600 dark:text-cyan-500 hover:underline",children:(0,i.jsx)(l(),{href:"https://robot-clutter.github.io/clt_core",children:(0,i.jsx)("a",{target:"_blank",rel:"noreferrer",children:"documentation"})})}),".",(0,i.jsxs)("p",{children:["This research was conducted in\xa0",(0,i.jsx)("span",{className:"mt-6 font-medium text-cyan-600 dark:text-cyan-500 hover:underline",children:(0,i.jsx)(l(),{href:"https://arl.ee.auth.gr",children:(0,i.jsx)("a",{target:"_blank",rel:"noreferrer",children:"Automation and Robotics Lab"})})}),"\xa0of\xa0",(0,i.jsx)("span",{className:"mt-6 font-medium text-cyan-600 dark:text-cyan-500 hover:underline",children:(0,i.jsx)(l(),{href:"https://www.auth.gr/en/",children:(0,i.jsx)("a",{target:"_blank",rel:"noreferrer",children:"Aristotle University of Thessaloniki"})})}),"."]})]})]})]})},h=a(26042);var d=function(e){var t=e.title,a=e.year,n=e.journal_small,r=e.abstract,o=e.slug,s=e.image;return(0,i.jsxs)("div",{className:"flex flex-col rounded-lg shadow-lg overflow-hidden",children:[(0,i.jsx)("div",{className:"flex-shrink-0",children:(0,i.jsx)(l(),{href:"/".concat(o),children:(0,i.jsx)("img",{className:"h-48 w-full object-cover cursor-pointer",src:"PUBLIC_FOLDER"===s.src?"/".concat(s.path):s.path,alt:""})})}),(0,i.jsx)("div",{className:"flex-1 bg-gray-50 dark:bg-gray-800 p-6 flex flex-col justify-between",children:(0,i.jsxs)("div",{className:"flex-1",children:[(0,i.jsxs)("div",{className:"block mt-2",children:[(0,i.jsx)("p",{className:"text-xl font-semibold text-gray-900 dark:text-gray-300 text-left",children:(0,i.jsx)(l(),{href:"/".concat(o),children:t})}),(0,i.jsx)("p",{className:"mt-1 text-base font-semibold text-gray-500 dark:text-gray-400 text-left",children:n+" "+a}),(0,i.jsx)("p",{className:"mt-3 text-base text-gray-500 dark:text-gray-400 text-left truncate",children:r})]}),(0,i.jsx)("p",{className:"text-left mt-6 font-medium text-cyan-600 dark:text-cyan-500 hover:underline",children:(0,i.jsx)(l(),{href:"/".concat(o),children:"Read More"})})]})})]})};var u=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"relative pt-10 pb-20 px-4 sm:px-6 lg:pt-14 lg:pb-28 lg:px-8",children:[(0,i.jsx)("div",{className:"absolute inset-0",children:(0,i.jsx)("div",{className:"bg-gray-50 dark:bg-gray-900 h-1/3 sm:h-2/3"})}),(0,i.jsxs)("div",{className:"relative max-w-7xl mx-auto",children:[(0,i.jsx)("div",{className:"text-center",children:(0,i.jsx)("h2",{className:"text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-300 sm:text-4xl",children:"Publications"})}),(0,i.jsx)("div",{className:"mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none",children:t.filter((function(e){return!e.is_hidden})).map((function(e){return(0,i.jsx)(d,(0,h.Z)({},e),e.slug)}))})]})]})},p=a(33618),g=a(92254),m=a(93936),f=a(98453),b=[a(25614).Z,f.Z,m.Z,g.Z,p.Z],x=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:"Robot Clutter"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(c,{}),(0,i.jsx)(u,{data:b})]})})};x.layout=o.Z;var v=x}},function(e){e.O(0,[947,774,888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);