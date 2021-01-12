import { ImageInterface, LinkInterface } from '../../types';

const TOTAL_SINGULATION_PUB = {
  slug: 'total-singulation',
  title: 'Total Singulation with Modular Reinforcement Learning',
  image: {
    src: 'PUBLIC_FOLDER',
    path: 'total_singulation_header_image.jpg',
    width: 1040,
    height: 975,
  } as ImageInterface,
  type: 'IEEE Robotics and Automation Letters (under review)',
  authors: ['Iason Sarantopoulos', 'Marios Kiatos', 'Zoe Doulgeri', 'Sotiris Malassiotis'],
  abstract:
    'Prehensile robotic grasping of a target object in clutter is challenging because, in such conditions, the target touches other objects, resulting to the lack of collision free grasp affordances. To address this problem, we propose a modular reinforcement learning method which uses continuous actions to totally singulate the target object from its surrounding clutter. A high level policy selects between pushing primitives, which are learned separately. Prior knowledge is effectively incorporated into learning, through action primitives and feature selection increasing sample efficiency. Experiments demonstrate that the proposed method considerably outperforms the state-of-the-art methods in the singulation task. Furthermore, although training is performed in simulation the learned policy is robustly transferred to a real environment without a significant drop in success rate. Finally, singulation tasks in different environments are addressed by easily adding a new primitive and by retraining only the high level policy.',
  video: 'https://www.youtube.com/watch?v=RZlDe-v3bok',
  code: [
    // {
    //   link: 'https://github.com/robot-clutter/robot-clutter.github.io',
    //   alias: 'Manuscript',
    //   type: 'manuscript',
    // },
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
  //   bib: `
  // @article{zeng2019tossingbot,
  //   title={TossingBot: Learning to Throw Arbitrary Objects with Residual Physics},
  //   author={Zeng, Andy and Song, Shuran and Lee, Johnny and Rodriguez, Alberto and Funkhouser, Thomas},
  //   booktitle={Proceedings of Robotics: Science and Systems (RSS)},
  //   year={2019}
  // }`,
};

export default TOTAL_SINGULATION_PUB;
