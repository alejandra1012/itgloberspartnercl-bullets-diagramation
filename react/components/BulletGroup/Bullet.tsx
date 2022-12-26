import React from 'react'
import { Link } from 'vtex.render-runtime'
import { LinkProps } from './BulletTypes'
import { useCssHandles} from 'vtex.css-handles'

type Props = {
  src: string
  titleBullet: string
  link: LinkProps
}

const Bullet = ({src, titleBullet, link}: Props) => {
  const CSS_HANDLES = ["bullet__item",
   "bullet__item--title",
   "bullet__item--image",
   "bullet__item--link"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  return(
    <div className={handles.bullet__item}>
      <Link
      to = {link.url}
      >
        <p>Mi imágen{src}</p>
        <p>{titleBullet}</p>
      </Link>
    </div>
  )
}

Bullet.schema ={
  title: "Bullet",
  type: "objet",
  properties: {
    src: {
      title: "Imagen de Bullet",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }

    }
  }
}

export default Bullet
