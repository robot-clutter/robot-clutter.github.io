import { ImageInterface, LinkInterface } from '../../types';
import { AUTHORS } from '../authors';

const MODULAR_RL_PUB = {
  slug: 'modular-rl',
  title: 'Total Singulation with Modular Reinforcement Learning',
  year: '2021',
  image: {
    src: 'PUBLIC_FOLDER',
    path: 'modular_rl_header_image.png',
    width: 1040,
    height: 975,
  } as ImageInterface,
  journal: 'IEEE Robotics and Automation Letters',
  journal_small: 'RAL',
  authors: [AUTHORS.IASON_SARANTOPOULOS, AUTHORS.MARIOS_KIATOS, AUTHORS.ZOE_DOULGERI, AUTHORS.SOTIRIS_MALASIOTIS],
  abstract:
    'Prehensile robotic grasping of a target object in clutter is challenging because, in such conditions, the target touches other objects, resulting to the lack of collision free grasp affordances. To address this problem, we propose a modular reinforcement learning method which uses continuous actions to totally singulate the target object from its surrounding clutter. A high level policy selects between pushing primitives, which are learned separately. Prior knowledge is effectively incorporated into learning, through action primitives and feature selection increasing sample efficiency. Experiments demonstrate that the proposed method considerably outperforms the state-of-the-art methods in the singulation task. Furthermore, although training is performed in simulation the learned policy is robustly transferred to a real environment without a significant drop in success rate. Finally, singulation tasks in different environments are addressed by easily adding a new primitive and by retraining only the high level policy.',
  videos: ['https://www.youtube.com/watch?v=RZlDe-v3bok', 'https://youtu.be/Ke0L5R-y-_Q'],
  code: [
    {
      link: 'https://ieeexplore.ieee.org/document/9363569',
      alias: 'IEEEXplore',
      type: 'manuscript',
    },
    {
      link: 'https://github.com/robot-clutter/robot-clutter.github.io',
      alias: 'Source Code',
      type: 'code',
      disabled: true,
      disabledText: 'Source code is not available yet. Please check again later.',
    },
    // {
    //   link: 'https://github.com/robot-clutter/robot-clutter.github.io',
    //   alias: 'Documentation',
    //   type: 'documentation',
    // },
  ] as LinkInterface[],
  bib: `@ARTICLE{modularrl21,
  author={I. {Sarantopoulos} and M. {Kiatos} and Z. {Doulgeri} and S. {Malassiotis}},
  journal={IEEE Robotics and Automation Letters}, 
  title={Total Singulation with Modular Reinforcement Learning}, 
  year={2021},
  volume={},
  number={},
  pages={1-1},
  doi={10.1109/LRA.2021.3062295}}`,
};

export default MODULAR_RL_PUB;
