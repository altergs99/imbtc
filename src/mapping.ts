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

import { Fedorky, T_ransfer, M_inted, B_urned } from "../generated/schema"

export function handleRevenueAddressSet(event: RevenueAddressSet): void { 
  let entity = Fedorky.load(event.transaction.from.toHex()) 
  if (entity == null) {
    entity = new Fedorky(event.transaction.from.toHex())    
    entity.count = BigInt.fromI32(0)
  }  
  entity.count = entity.count + BigInt.fromI32(1)
  entity.account = event.params.account
  entity.save()  
}

export function handleTransferEnabled(event: TransferEnabled): void {}

export function handleTransferDisabled(event: TransferDisabled): void {}

export function handlePaused(event: Paused): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handleMinterAdded(event: MinterAdded): void {}

export function handleMinterRemoved(event: MinterRemoved): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleRevenueDistributed(event: RevenueDistributed): void {}

export function handleTransfer(event: Transfer): void {
  let entity = T_ransfer.load(event.transaction.from.toHex()) 
  if (entity == null) {
    entity = new T_ransfer(event.transaction.from.toHex())    
    entity.count = BigInt.fromI32(0)
  }  
  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()  
}

export function handleApproval(event: Approval): void {}

export function handleSent(event: Sent): void {}

export function handleMinted(event: Minted): void {
  let entity = M_inted.load(event.transaction.from.toHex()) 
  if (entity == null) {
    entity = new M_inted(event.transaction.from.toHex())    
    entity.count = BigInt.fromI32(0)
  }  
  entity.count = entity.count + BigInt.fromI32(1)
  entity.operator = event.params.operator
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.data = event.params.data
  entity.save()   
}

export function handleBurned(event: Burned): void {
  let entity = B_urned.load(event.transaction.from.toHex()) 
  if (entity == null) {
    entity = new B_urned(event.transaction.from.toHex())    
    entity.count = BigInt.fromI32(0)
  }  
  entity.count = entity.count + BigInt.fromI32(1)
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.amount = event.params.amount
  entity.data = event.params.data
  entity.save()   

}

export function handleAuthorizedOperator(event: AuthorizedOperator): void {}

export function handleRevokedOperator(event: RevokedOperator): void {}
