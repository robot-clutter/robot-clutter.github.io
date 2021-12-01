(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45301:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(86380)}])},89604:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var a=i(85893),n=i(67294),r=i(72204),o=i(40425),s=i(41664);var l=function(){var e=(0,o.F)(),t=e.setTheme,i=e.resolvedTheme,l=(0,n.useState)(!1),c=l[0],u=l[1];(0,n.useEffect)((function(){return u(!0)}),[]);var h="dark"===i;return(0,a.jsx)("nav",{className:"bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-500",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"flex justify-between h-16",children:[(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)("div",{className:"flex-shrink-0 flex items-center",children:c&&(0,a.jsx)(s.default,{href:"/",children:(0,a.jsx)("img",{className:"block h-12 w-auto cursor-pointer",src:h?"logo-white.svg":"logo-black.svg",alt:"Workflow"})})})}),(0,a.jsx)("div",{className:"ml-6 flex items-center",children:c&&(0,a.jsx)(r.DarkModeSwitch,{checked:h,onChange:function(e){t(e?"dark":"light")}})})]})})})},c=function(e){var t=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{}),t]})}},58848:function(e,t,i){"use strict";function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{c:function(){return r},r:function(){return o}});var n,r={IASON_SARANTOPOULOS:"IASON_SARANTOPOULOS",MARIOS_KIATOS:"MARIOS_KIATOS",ZOE_DOULGERI:"ZOE_DOULGERI",SOTIRIS_MALASIOTIS:"SOTIRIS_MALASIOTIS"},o=(a(n={},r.IASON_SARANTOPOULOS,{first_name:"Iason",last_name:"Sarantopoulos",url:"https://arl.ee.auth.gr/people/sarantopoulos/"}),a(n,r.MARIOS_KIATOS,{first_name:"Marios",last_name:"Kiatos",url:"https://scholar.google.com/citations?user=VBOCox4AAAAJ"}),a(n,r.ZOE_DOULGERI,{first_name:"Zoe",last_name:"Doulgeri",url:"https://arl.ee.auth.gr/people/doulgeri/"}),a(n,r.SOTIRIS_MALASIOTIS,{first_name:"Sotiris",last_name:"Malassiotis",url:"https://scholar.google.com/citations?user=icuzuYgAAAAJ"}),n)},98453:function(e,t,i){"use strict";var a=i(58848),n={slug:"bridging-the-gap",title:"Bridging the gap between learning and heuristic based pushing policies",image:{src:"PUBLIC_FOLDER",path:"bridging_the_gap_header_image.jpg",width:1040,height:975},type:"Preprint",authors:[a.c.MARIOS_KIATOS,a.c.IASON_SARANTOPOULOS,a.c.SOTIRIS_MALASIOTIS,a.c.ZOE_DOULGERI],abstract:"Non-prehensile pushing actions have the potential to singulate a target object from its surrounding clutter in order to facilitate the robotic grasping of the target. To address this problem we utilize a heuristic rule that moves the target object towards the workspace's empty space and demonstrate that this simple heuristic rule achieves singulation. Furthermore, we incorporate this heuristic rule to the reward in order to train more efficiently reinforcement learning (RL) agents for singulation. Simulation experiments demonstrate that this insight increases performance. Finally, our results show that the RL-based policy implicitly learns something similar to one of the used heuristics in terms of decision making.",videos:[],code:[{link:"https://arxiv.org/abs/2111.11156",alias:"Arxiv",type:"manuscript"},{link:"https://github.com/robot-clutter/bridging-the-gap",alias:"Source Code",type:"code",disabled:!0,disabledText:"Source code is not available yet. Please check again later."}],bib:"@article{bridging-the-gap,\n    title={Bridging the gap between learning and heuristic based pushing policies},\n    author={Kiatos, Marios and Sarantopoulos, Iason and Malassiotis, Sotiris and Doulgeri, Zoe},\n    journal={arXiv preprint arXiv:2111.11156},\n    year={2021}\n  }"};t.Z=n},33618:function(e,t,i){"use strict";var a=i(58848),n={slug:"dqn",title:"Robust object grasping in clutter via singulation",image:{src:"PUBLIC_FOLDER",path:"dqn_header_image.jpg",width:1040,height:975},type:"2019 IEEE International Conference on Robotics and Automation",authors:[a.c.MARIOS_KIATOS,a.c.SOTIRIS_MALASIOTIS],abstract:"Grasping objects in a cluttered environment is challenging due to the lack of collision free grasp affordances. In such conditions, the target object touches or is covered by other objects in the scene, resulting in a failed grasp. To address this problem, we propose a strategy of singulating the object from its surrounding clutter, which consists of previously unseen objects, by means of lateral pushing movements. We employ reinforcement learning for obtaining optimal push policies given depth observations of the scene. The action-value function(Q-function) is approximated with a deep neural network. We train the robot in simulation and we demonstrate that the transfer of learned policies to the real environment is robust.",videos:["https://www.youtube.com/watch?v=nj2FxaUCA5c"],code:[{link:"https://ieeexplore.ieee.org/document/8793972",alias:"IEEEXplore",type:"manuscript"}],bib:"@inproceedings{singulation19,\nauthor={M. {Kiatos} and S. {Malassiotis}},\nbooktitle={2019 International Conference on Robotics and Automation (ICRA)},\ntitle={Robust object grasping in clutter via singulation},\nyear={2019},\nvolume={},\nnumber={},\npages={1596-1600},\ndoi={10.1109/ICRA.2019.8793972}}"};t.Z=n},93936:function(e,t,i){"use strict";var a=i(58848),n={slug:"modular-rl",title:"Total Singulation with Modular Reinforcement Learning",image:{src:"PUBLIC_FOLDER",path:"modular_rl_header_image.png",width:1040,height:975},type:"IEEE Robotics and Automation Letters (2021)",authors:[a.c.IASON_SARANTOPOULOS,a.c.MARIOS_KIATOS,a.c.ZOE_DOULGERI,a.c.SOTIRIS_MALASIOTIS],abstract:"Prehensile robotic grasping of a target object in clutter is challenging because, in such conditions, the target touches other objects, resulting to the lack of collision free grasp affordances. To address this problem, we propose a modular reinforcement learning method which uses continuous actions to totally singulate the target object from its surrounding clutter. A high level policy selects between pushing primitives, which are learned separately. Prior knowledge is effectively incorporated into learning, through action primitives and feature selection increasing sample efficiency. Experiments demonstrate that the proposed method considerably outperforms the state-of-the-art methods in the singulation task. Furthermore, although training is performed in simulation the learned policy is robustly transferred to a real environment without a significant drop in success rate. Finally, singulation tasks in different environments are addressed by easily adding a new primitive and by retraining only the high level policy.",videos:["https://www.youtube.com/watch?v=RZlDe-v3bok","https://youtu.be/Ke0L5R-y-_Q"],code:[{link:"https://ieeexplore.ieee.org/document/9363569",alias:"IEEEXplore",type:"manuscript"},{link:"https://github.com/robot-clutter/robot-clutter.github.io",alias:"Source Code",type:"code",disabled:!0,disabledText:"Source code is not available yet. Please check again later."}],bib:"@ARTICLE{modularrl21,\n  author={I. {Sarantopoulos} and M. {Kiatos} and Z. {Doulgeri} and S. {Malassiotis}},\n  journal={IEEE Robotics and Automation Letters}, \n  title={Total Singulation with Modular Reinforcement Learning}, \n  year={2021},\n  volume={},\n  number={},\n  pages={1-1},\n  doi={10.1109/LRA.2021.3062295}}"};t.Z=n},92254:function(e,t,i){"use strict";var a=i(58848),n={slug:"split-dqn",title:"Split Deep Q-Learning for Robust Object Singulation",image:{src:"PUBLIC_FOLDER",path:"split_dqn_header_image.jpg",width:1040,height:975},type:"2020 IEEE International Conference on Robotics and Automation",authors:[a.c.IASON_SARANTOPOULOS,a.c.MARIOS_KIATOS,a.c.ZOE_DOULGERI,a.c.SOTIRIS_MALASIOTIS],abstract:"Extracting a known target object from a pile of other objects in a cluttered environment is a challenging robotic manipulation task encountered in many robotic applications. In such conditions, the target object touches or is covered by adjacent obstacle objects, thus rendering traditional grasping techniques ineffective. In this paper, we propose a pushing policy aiming at singulating the target object from its surrounding clutter, by means of lateral pushing movements of both the neighboring objects and the target object until sufficient 'grasping room' has been achieved. To achieve the above goal we employ reinforcement learning and particularly Deep Q-learning (DQN) to learn optimal push policies by trial and error. A novel Split DQN is proposed to improve the learning rate and increase the modularity of the algorithm. Experiments show that although learning is performed in a simulated environment the transfer of learned policies to a real environment is effective thanks to robust feature selection. Finally, we demonstrate that the modularity of the algorithm allows the addition of extra primitives without retraining the model from scratch.",videos:["https://www.youtube.com/watch?v=ef1MKgVkN0E"],code:[{link:"https://ieeexplore.ieee.org/document/9196647",alias:"IEEEXplore",type:"manuscript"},{link:"https://arxiv.org/abs/1909.08105",alias:"Arxiv",type:"manuscript"},{link:"https://github.com/robot-clutter/robot-clutter.github.io",alias:"Source Code",type:"code",disabled:!0,disabledText:"Source code is not available yet. Please check again later."}],bib:"@inproceedings{splitdqn20,\n  title={Split Deep Q-Learning for Robust Object Singulation},\n  author={Sarantopoulos, Iason and Kiatos, Marios and Doulgeri, Zoe and Malassiotis, Sotiris},\n  booktitle={2020 IEEE International Conference on Robotics and Automation (ICRA)},\n  pages={6225--6231},\n  year={2020},\n  organization={IEEE}\n}"};t.Z=n},86380:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var a=i(85893),n=i(9008),r=i(89604),o=i(41664);var s=function(e){var t=e.title,i=e.abstract,n=e.slug,r=e.image;return(0,a.jsxs)("div",{className:"flex flex-col rounded-lg shadow-lg overflow-hidden",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)(o.default,{href:"/".concat(n),children:(0,a.jsx)("img",{className:"h-48 w-full object-cover cursor-pointer",src:"PUBLIC_FOLDER"===r.src?"/".concat(r.path):r.path,alt:""})})}),(0,a.jsx)("div",{className:"flex-1 bg-gray-50 dark:bg-gray-800 p-6 flex flex-col justify-between",children:(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsxs)("div",{className:"block mt-2",children:[(0,a.jsx)("p",{className:"text-xl font-semibold text-gray-900 dark:text-gray-300 text-left",children:(0,a.jsx)(o.default,{href:"/".concat(n),children:t})}),(0,a.jsx)("p",{className:"mt-3 text-base text-gray-500 dark:text-gray-400 text-left truncate",children:i})]}),(0,a.jsx)("p",{className:"text-left mt-6 font-medium text-cyan-600 dark:text-cyan-500 hover:underline",children:(0,a.jsx)(o.default,{href:"/".concat(n),children:"Read More"})})]})})]})};function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var c=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"relative pt-10 pb-20 px-4 sm:px-6 lg:pt-14 lg:pb-28 lg:px-8",children:[(0,a.jsx)("div",{className:"absolute inset-0",children:(0,a.jsx)("div",{className:"bg-gray-50 dark:bg-gray-900 h-1/3 sm:h-2/3"})}),(0,a.jsxs)("div",{className:"relative max-w-7xl mx-auto",children:[(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)("h2",{className:"text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-300 sm:text-4xl",children:"Publications"})}),(0,a.jsx)("div",{className:"mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none",children:t.map((function(e){return(0,a.jsx)(s,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),a.forEach((function(t){l(e,t,i[t])}))}return e}({},e),e.slug)}))})]})]})},u=i(33618),h=i(92254),d=i(93936),g=i(98453),p=[u.Z,h.Z,d.Z,g.Z],m=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsxs)(n.default,{children:[(0,a.jsx)("title",{children:"Robot Clutter"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(c,{data:p})]})})};m.layout=r.Z;var f=m}},function(e){e.O(0,[72,774,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);