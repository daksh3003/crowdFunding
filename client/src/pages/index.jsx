export { default as Home } from './Home';
export { default as Profile } from './Profile';
export { default as CreateCampaign } from './CreateCampaign';
export { default as CampaignDetails } from './CampaignDetails';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import Home from './Home';
import CreateCampaign from './CreateCampaign';
import CampaignDetails from './CampaignDetails';

const App = () => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Sepolia}>
      <Home/>
      <Profile/>
      <CreateCampaign/>
      <CampaignDetails/>
    </ThirdwebProvider>
  );
};
