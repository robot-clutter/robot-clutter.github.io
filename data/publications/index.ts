import { PublicationInterface } from '../../types';
import DQN_PUB from './dqn';
import SPLIT_DQN_PUB from './split-dqn';
import MODULAR_RL_PUB from './modular-rl';

const publications: PublicationInterface[] = [DQN_PUB, SPLIT_DQN_PUB, MODULAR_RL_PUB];

export default publications;
