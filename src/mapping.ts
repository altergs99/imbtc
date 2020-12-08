import { BigInt } from "@graphprotocol/graph-ts"
import {
  imbtc,
  RevenueAddressSet,
  TransferEnabled,
  TransferDisabled,
  Paused,
  Unpaused,
  MinterAdded,
  MinterRemoved,
  OwnershipTransferred,
  RevenueDistributed,
  Transfer,
  Approval,
  Sent,
  Minted,
  Burned,
  AuthorizedOperator,
  RevokedOperator
} from "../generated/imbtc/imbtc"
import { Fedorky } from "../generated/schema"
export function handleRevenueAddressSet(event: RevenueAddressSet): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = Fedorky.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new Fedorky(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.account = event.params.account

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.defaultOperators(...)
  // - contract.name(...)
  // - contract.approve(...)
  // - contract.totalSupply(...)
  // - contract.transferFrom(...)
  // - contract.decimals(...)
  // - contract.exchangeRate(...)
  // - contract.revenue(...)
  // - contract.granularity(...)
  // - contract.paused(...)
  // - contract.balanceOf(...)
  // - contract.owner(...)
  // - contract.isOwner(...)
  // - contract.transferable(...)
  // - contract.symbol(...)
  // - contract.transfer(...)
  // - contract.isMinter(...)
  // - contract.revenueAddress(...)
  // - contract.newOwner(...)
  // - contract.accuracyBalanceOf(...)
  // - contract.isOperatorFor(...)
  // - contract.allowance(...)
}

export function handleTransferEnabled(event: TransferEnabled): void {}

export function handleTransferDisabled(event: TransferDisabled): void {}

export function handlePaused(event: Paused): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handleMinterAdded(event: MinterAdded): void {}

export function handleMinterRemoved(event: MinterRemoved): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleRevenueDistributed(event: RevenueDistributed): void {}

export function handleTransfer(event: Transfer): void {}

export function handleApproval(event: Approval): void {}

export function handleSent(event: Sent): void {}

export function handleMinted(event: Minted): void {
 // let event = (event.transaction.from.toHex())
 // if (event == null) {
 // event = new Minted(event.transaction.from.toHex())
 // }
  
}

export function handleBurned(event: Burned): void {}

export function handleAuthorizedOperator(event: AuthorizedOperator): void {}

export function handleRevokedOperator(event: RevokedOperator): void {}
