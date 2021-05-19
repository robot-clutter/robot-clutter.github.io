import { ImageInterface, LinkInterface } from '../../types';
import { AUTHORS } from '../authors';

const DQN_PUB = {
  slug: 'dqn',
  title: 'Robust object grasping in clutter via singulation',
  image: {
    src: 'PUBLIC_FOLDER',
    path: 'dqn_header_image.jpg',
    width: 1040,
    height: 975,
  } as ImageInterface,
  type: '2019 IEEE International Conference on Robotics and Automation',
  authors: [AUTHORS.MARIOS_KIATOS, AUTHORS.SOTIRIS_MALASIOTIS],
  abstract:
    'Grasping objects in a cluttered environment is challenging due to the lack of collision free grasp affordances. In such conditions, the target object touches or is covered by other objects in the scene, resulting in a failed grasp. To address this problem, we propose a strategy of singulating the object from its surrounding clutter, which consists of previously unseen objects, by means of lateral pushing movements. We employ reinforcement learning for obtaining optimal push policies given depth observations of the scene. The action-value function(Q-function) is approximated with a deep neural network. We train the robot in simulation and we demonstrate that the transfer of learned policies to the real environment is robust.',
  video: 'https://www.youtube.com/watch?v=nj2FxaUCA5c',
  code: [
    {
      link: 'https://ieeexplore.ieee.org/document/8793972',
      alias: 'IEEEXplore',
      type: 'manuscript',
    },
    // {
    //   link: 'https://arxiv.org/abs/1909.08105',
    //   alias: 'Arxiv',
    //   type: 'manuscript',
    // },
    // {
    //   link: 'https://github.com/robot-clutter/robot-clutter.github.io',
    //   alias: 'Github Repo',
    //   type: 'code',
    // },
    // {
    //   link: 'https://github.com/robot-clutter/robot-clutter.github.io',
    //   alias: 'Documentation',
    //   type: 'documentation',
    // },
  ] as LinkInterface[],
  bib: `@inproceedings{singulation19,
author={M. {Kiatos} and S. {Malassiotis}},
booktitle={2019 International Conference on Robotics and Automation (ICRA)},
title={Robust object grasping in clutter via singulation},
year={2019},
volume={},
number={},
pages={1596-1600},
doi={10.1109/ICRA.2019.8793972}}`,
};

export default DQN_PUB;
