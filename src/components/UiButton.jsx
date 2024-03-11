import React from 'react'
import { onboardButtonStyle } from '.'
import { Button } from '@mui/material'

export default function UiButton({varient,styledComponent,onButtonClick,buttonText}) {
  return (
    <div>
         <Button onClick={onButtonClick} variant={varient} style={styledComponent}>{buttonText}</Button>
    </div>
  )
}
