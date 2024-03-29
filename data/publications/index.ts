import { PublicationInterface } from '../../types';
import DQN_PUB from './dqn';
import SPLIT_DQN_PUB from './split-dqn';
import MODULAR_RL_PUB from './modular-rl';
import BRIDGING_THE_GAP_PUB from './bridging-the-gap';
import PPG_PUB from './ppg';

const publications: PublicationInterface[] = [PPG_PUB, BRIDGING_THE_GAP_PUB, MODULAR_RL_PUB, SPLIT_DQN_PUB, DQN_PUB];

export default publications;
