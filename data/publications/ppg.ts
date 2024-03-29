import { ImageInterface, LinkInterface } from '../../types';
import { AUTHORS } from '../authors';
// import video from '../data/media/task.mp4'

const LEARNING_PUSH_GRASPING_IN_DENSE_CLUTTER = {
  slug: 'ppg',
  title: 'Learning Push-Grasping in Dense Clutter',
  year: '2022',
  is_hidden: false,
  image: {
    src: 'PUBLIC_FOLDER',
    path: 'push_grasping_header_image.png',
    width: 440,
    height: 467,
  } as ImageInterface,
  journal: '',
  journal_small: 'IEEE RAL',
  authors: [
    AUTHORS.MARIOS_KIATOS,
    AUTHORS.IASON_SARANTOPOULOS,
    AUTHORS.LEONIDAS_KOUTRAS,
    AUTHORS.SOTIRIS_MALASSIOTIS,
    AUTHORS.ZOE_DOULGERI,
  ],
  github: 'https://github.com/mkiatos/power-push-grasping',
  abstract:
    'Robotic grasping in highly cluttered environments remains a challenging task due to the lack of collision free grasp affordances. In such conditions, non-prehensile actions could help to increase such affordances. We propose a multi-fingered push-grasping policy that creates enough space for the fingers to wrap around an object to perform a stable power grasp, using a single primitive action. Our approach learns a direct mapping from visual observations to actions and is trained in a fully end-to-end manner. To achieve a more efficient learning, we decouple the action space by learning separately the robot hand pose and finger configuration. Experiments in simulation demonstrate that the proposed push-grasping policy achieves higher grasp success rate over baselines and that can generalize to unseen objects. Furthermore, although training is performed in simulation the learned policy is robustly transferred to a real environment without a significant drop in success rate.',
  abstract2:
    'The video and the images illustrate the different ways that a push-grasping primitive can create free space around an object in order to establish a stable power grasp in clutter. A proper push-grasping can roll-in an object within the palm of the hand and roll out or translate other objects away from the hand’s closing region.',
  videos: ['task.mp4'],
  summary_video: ['ral_video.mp4'],
  example_videos: ['e22_cropped_01.mp4', 'e10_cropped_02.mp4', 'e20_cropped_03.mp4'],
  example_videos2: ['e17_cropped.mp4', 'e8_cropped_05.mp4', 'e23_cropped_06.mp4'],
  failure_videos: ['e15_cropped_f1.mp4', 'e24_cropped_f2.mp4'],
  code: [
    {
      link: 'https://ieeexplore.ieee.org/document/9815129',
      alias: 'IEEEXplore',
      type: 'manuscript',
    },
    // {
    //   link: 'https://arxiv.org/abs/1909.08105',
    //   alias: 'Arxiv',
    //   type: 'manuscript',
    // },
    {
      link: 'https://github.com/mkiatos/power-push-grasping',
      alias: 'Github Repo',
      type: 'code',
    },
    // {
    //   link: 'https://github.com/robot-clutter/robot-clutter.github.io',
    //   alias: 'Documentation',
    //   type: 'documentation',
    // },
  ] as LinkInterface[],
  bib: `@ARTICLE{9815129,
author={Kiatos, Marios and Sarantopoulos, Iason and Koutras, Leonidas and Malassiotis, Sotiris and Doulgeri, Zoe},
journal={IEEE Robotics and Automation Letters}, 
title={Learning Push-Grasping in Dense Clutter}, 
year={2022},
volume={},
number={},
pages={1-8},
doi={10.1109/LRA.2022.3188437}}`,
};

export default LEARNING_PUSH_GRASPING_IN_DENSE_CLUTTER;
