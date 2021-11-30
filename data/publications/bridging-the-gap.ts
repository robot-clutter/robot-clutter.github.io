import { ImageInterface, LinkInterface } from '../../types';
import { AUTHORS } from '../authors';

const SPLIT_DQN_PUB = {
  slug: 'bridging-the-gap',
  title: 'Bridging the gap between learning and heuristic based pushing policies',
  image: {
    src: 'PUBLIC_FOLDER',
    path: 'bridging_the_gap_header_image.jpg',
    width: 1040,
    height: 975,
  } as ImageInterface,
  type: 'Preprint',
  authors: [AUTHORS.IASON_SARANTOPOULOS, AUTHORS.MARIOS_KIATOS, AUTHORS.SOTIRIS_MALASIOTIS, AUTHORS.ZOE_DOULGERI],
  abstract:
    "Non-prehensile pushing actions have the potential to singulate a target object from its surrounding clutter in order to facilitate the robotic grasping of the target. To address this problem we utilize a heuristic rule that moves the target object towards the workspace's empty space and demonstrate that this simple heuristic rule achieves singulation. Furthermore, we incorporate this heuristic rule to the reward in order to train more efficiently reinforcement learning (RL) agents for singulation. Simulation experiments demonstrate that this insight increases performance. Finally, our results show that the RL-based policy implicitly learns something similar to one of the used heuristics in terms of decision making.",
  videos: [],
  code: [
    // {
    //   link: 'https://ieeexplore.ieee.org/document/9196647',
    //   alias: 'IEEEXplore',
    //   type: 'manuscript',
    // },
    {
      link: 'https://arxiv.org/abs/2111.11156',
      alias: 'Arxiv',
      type: 'manuscript',
    },
    {
      link: 'https://github.com/robot-clutter/bridging-the-gap',
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
  bib: `@article{bridging-the-gap,
    title={Bridging the gap between learning and heuristic based pushing policies},
    author={Kiatos, Marios and Sarantopoulos, Iason and Malassiotis, Sotiris and Doulgeri, Zoe},
    journal={arXiv preprint arXiv:2111.11156},
    year={2021}
  }`,
};

export default SPLIT_DQN_PUB;
