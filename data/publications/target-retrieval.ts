import { ImageInterface, LinkInterface } from '../../types';
import { AUTHORS } from '../authors';
// import video from '../data/media/task.mp4'

const TARGET_RETRIEVAL = {
  slug: 'target-retrieval',
  title: 'Learning a Pre-Grasp Manipulation Policy to Effectively Retrieve a Target in Dense Clutter',
  year: '2024',
  is_hidden: true,
  image: {
    src: 'PUBLIC_FOLDER',
    path: 'push_grasping_header_image.png',
    width: 440,
    height: 467,
  } as ImageInterface,
  journal: '',
  journal_small: 'IEEE RAL',
  authors: [AUTHORS.MARIOS_KIATOS, AUTHORS.LEONIDAS_KOUTRAS, AUTHORS.IASON_SARANTOPOULOS, AUTHORS.ZOE_DOULGERI],
  github: 'https://github.com/robot-clutter/hybrid-pushing',
  abstract:
    'Robotic grasping of a target object in cluttered environments poses considerable challenges, often due to limited collision-free grasp affordances caused by the close proximity of other objects. To overcome this limitation, non-prehensile actions like pushing can be strategically employed to manipulate the environment and improve the chances of successful grasps. In this paper, we introduce a novel pre-grasp manipulation policy designed to efficiently retrieve a target object from dense clutter by leveraging pushing actions and considering the gripper’s kinematic capabilities to strategically position the target object within the gripper’s closing region for a secure grasp. Unlike conventional approaches, our policy incorporates sequential pushing, allowing the robot to make decisions while within the camera’s field of view without retracting to a home position, leading to significantly reduced execution time per action. Our policy, trained in simulation, seamlessly transfers to real-world scenarios. Extensive experimental evaluation demonstrates superior performance, faster completion times, and robust generalization to unseen objects compared to existing baselines.',
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
author={Kiatos, Marios and Koutras, Leonidas and Sarantopoulos, Iason and Doulgeri, Zoe},
journal={IEEE Robotics and Automation Letters}, 
title={Learning Push-Grasping in Dense Clutter}, 
year={2022},
volume={},
number={},
pages={1-8},
doi={10.1109/LRA.2022.3188437}}`,
};

export default TARGET_RETRIEVAL;
