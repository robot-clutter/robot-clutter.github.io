import { ImageInterface, LinkInterface } from '../../types';

const SPLIT_DQN_PUB = {
  slug: 'split-dqn',
  title: 'Split Deep Q-Learning for Robust Object Singulation',
  image: {
    src: 'PUBLIC_FOLDER',
    path: 'split_dqn_header_image.jpg',
    width: 1040,
    height: 975,
  } as ImageInterface,
  type: '2020 IEEE International Conference on Robotics and Automation',
  authors: ['Iason Sarantopoulos', 'Marios Kiatos', 'Zoe Doulgeri', 'Sotiris Malassiotis'],
  abstract:
    'Extracting a known target object from a pile of other objects in a cluttered environment is a challenging robotic manipulation task encountered in many robotic applications. In such conditions, the target object touches or is covered by adjacent obstacle objects, thus rendering traditional grasping techniques ineffective. In this paper, we propose a pushing policy aiming at singulating the target object from its surrounding clutter, by means of lateral pushing movements of both the neighboring objects and the target object until sufficient \'grasping room\' has been achieved. To achieve the above goal we employ reinforcement learning and particularly Deep Q-learning (DQN) to learn optimal push policies by trial and error. A novel Split DQN is proposed to improve the learning rate and increase the modularity of the algorithm. Experiments show that although learning is performed in a simulated environment the transfer of learned policies to a real environment is effective thanks to robust feature selection. Finally, we demonstrate that the modularity of the algorithm allows the addition of extra primitives without retraining the model from scratch.',
  video: 'https://www.youtube.com/watch?v=ef1MKgVkN0E',
  code: [
    {
      link: 'https://ieeexplore.ieee.org/document/9196647',
      alias: 'IEEEXplore',
      type: 'manuscript',
    },
    {
      link: 'https://arxiv.org/abs/1909.08105',
      alias: 'Arxiv',
      type: 'manuscript',
    },
    {
      link: 'https://github.com/robot-clutter/robot-clutter.github.io',
      alias: 'Github Repo',
      type: 'code',
    },
    // {
    //   link: 'https://github.com/robot-clutter/robot-clutter.github.io',
    //   alias: 'Documentation',
    //   type: 'documentation',
    // },
  ] as LinkInterface[],
    bib: `
@inproceedings{splitdqn,
  title={Split Deep Q-Learning for Robust Object Singulation},
  author={Sarantopoulos, Iason and Kiatos, Marios and Doulgeri, Zoe and Malassiotis, Sotiris},
  booktitle={2020 IEEE International Conference on Robotics and Automation (ICRA)},
  pages={6225--6231},
  year={2020},
  organization={IEEE}
  }
    `
};

export default SPLIT_DQN_PUB;
