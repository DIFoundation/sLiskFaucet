import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LiskFaucetModule = buildModule("LiskFaucetModule", (m) => {
  const liskToken = "0xc8E1f3D658775c603a0d2E7e9fc59578f546B0f6";
  const amountPerRequest = m.getParameter("amountPerRequest", 100n * 10n ** 18n);
  const cooldown = m.getParameter("cooldown", 86400);
  const maxPerUser = m.getParameter("maxPerUser", 100n * 10n ** 18n);

  const liskFaucet = m.contract("LiskFaucet", [liskToken, amountPerRequest, cooldown, maxPerUser]);

  return { liskFaucet };
});

export default LiskFaucetModule;
