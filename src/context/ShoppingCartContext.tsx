import React, { createContext, ReactNode, useContext, useState } from 'react'

type ShoppingCartProviderProps = {
    children : ReactNode
}



type CartItem = {
    id : number
    name : string
    quantity : number
}

type ShoppingCartContext = {
    getItemQuantity : (id: number) => number
    increaseCartQuantity : (id : number)=> void
    decreaseCartQuantity : (id : number)=> void
    removeFromCart : (id : number)=> void
}


const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart ()  {
 
   return useContext(ShoppingCartContext)
  
}


export function ShoppingCartProvider({children} : ShoppingCartProviderProps){
    const [cartItems, seCartItems] = useState<CartItem[]>([])

    return (
        <ShoppingCartContext.Provider value={{}}>
        {children}
        </ShoppingCartContext.Provider>
    )
}