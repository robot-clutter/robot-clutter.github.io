import { ImageInterface, LinkInterface } from '../../types';
import { AUTHORS } from '../authors';
// import video from '../data/media/task.mp4'

const LEARNING_PUSH_GRASPING_IN_DENSE_CLUTTER = {
  slug: 'ppg',
  title: 'Learning Push-Grasping in Dense Clutter',
  year: '2022',
  is_hidden: true,
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
  example_videos: [],
  failure_videos: [],
  code: [
    // {
    //   link: 'https://ieeexplore.ieee.org/document/8793972',
    //   alias: 'IEEEXplore',
    //   type: 'manuscript',
    // },
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
  bib: ` `,
};

export default LEARNING_PUSH_GRASPING_IN_DENSE_CLUTTER;
