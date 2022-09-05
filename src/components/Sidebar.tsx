import React from 'react'
import {Stack} from "@mui/material"
import { categories } from '../utilis/contants'
import {Dispatch,SetStateAction} from 'react'




interface IProps{
    selectedCategory:string,
    setSelectedCategory:Dispatch<SetStateAction<string>>
}

const Sidebar = ({selectedCategory,setSelectedCategory}:IProps) => {


return (
    <Stack 
    direction="row"
    sx={{
        px:2,
        width:{lg:"200px"},
        overflowY:"auto",
        height:{sx:"auto",md:'95%'},
        flexDirection:{md:'column'}


    }}
      >
        {
            categories.map((category)=>(
            <button className="category-btn" 
            onClick={()=>setSelectedCategory(category.name)} 
            key={category.name}

            style={{background:category.name===selectedCategory? "red":"transparent",color:"#fff"  }}
        
            
            >
                <span 
                style={{color:category.name===selectedCategory?'white':'red',marginRight:"15px"}}
                   >
                    {category.icon}

                </span>

                   <span 
                    style={{opacity:category.name===selectedCategory?1:0.8}} 
                   >
                   {category.name}
                   
               </span>
            </button>
            ))
        }

    </Stack>

  )
}

export default Sidebar