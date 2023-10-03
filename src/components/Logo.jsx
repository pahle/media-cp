import Image from 'next/image'
import logotulisan from '@/images/logotulisan.png'

export function Logo(props) {
  return (
    <Image
        className={props.className}
        src={logotulisan}
        alt=""
        unoptimized
      />
  )
}
