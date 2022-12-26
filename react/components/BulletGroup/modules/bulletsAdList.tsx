import React from 'react'
import { BulletsSchema} from '../BulletTypes'
import Bullet from '../Bullet'

export const getBulletsAsTSXList = (
  bullets: BulletsSchema
) => (
  bullets.map((bullets:any, index) => {
    console.log("Mi byllet es:", bullets)
    return <Bullet
    key={index}
    src={bullets.image}
    titleBullet={bullets.titleBullet}
    link={
      bullets.link
      ?
       bullets.link
      :
      {
        url: "",
        attributeNofollow: false,
        attributeTitle: "",
        openNewtab: false,
        newTab: false
      }
    }
    />
  })
)
