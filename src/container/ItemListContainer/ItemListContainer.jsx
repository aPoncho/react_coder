function ItemListContainer({greeting, children}) {
    

    return (
        <div className="itemListContainer">
            <p>{greeting}</p>
            {children}
        </div>
    )
}

export default ItemListContainer