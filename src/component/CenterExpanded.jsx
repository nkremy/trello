export function CenterExpanded({children}){
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center", minHeight:"calc(100vh - 60px)",width:"100%"}}>
        {children}
    </div>
} 