# Tasks: Update Contract Code

| Task | Status | Notes |
|--------|--------|-------|
| Update contract name from `CryptoPunksMarket` to `MazzePunksMarket` | ✅ Completed | Already done in the file |
| Update `standard` from 'CryptoPunks' to 'MazzePunks' | ✅ Completed | Already done in the file |
| Update `name` from "CRYPTOPUNKS" to "MAZZEPUNKS" | ✅ Completed | Already done in the file |
| Update `symbol` from "Ͼ" to "MP" | ✅ Completed | Already done in the file |
| Update `imageHash` to reflect the new image collection | ⏳ Pending | Need to generate new hash after creating images |
| Verify if `totalSupply` of 10000 is the desired number for MazzePunks | ⏳ Pending | Confirm if this number should be maintained |
| Adapt the contract to work with Mazze BlockDAG | ⏳ Pending | Check differences between Ethereum and Mazze BlockDAG |
| Update ETH references to the native currency of Mazze BlockDAG | ⏳ Pending | If necessary, change all ETH references |
| Update Solidity version if necessary | ⏳ Pending | Currently using 0.4.8, consider updating |
| Test the updated contract | ⏳ Pending | Create tests to verify functionality |

## Additional Notes
- Check if there are Ethereum-specific functions that need to be adapted for Mazze BlockDAG
- Consider adding new features specific to MazzePunks
- Document all changes made to the contract 