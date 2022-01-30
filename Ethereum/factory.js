import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), '0x11A4d0Bd0739e63f553a46bA40F772E9e116B5fc');

export default instance;