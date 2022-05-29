import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";

export default function Erc721Form(props)  {
    
    return (
        <div>
            <Box display="flex" alignItems="center" justifyContent="center">
                <Typography sx={{fontSize: "45px", color: "#002984"}}>
                    ERC721
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
                <Button>Mint</Button>
            </Box>
        </div>
    )
}