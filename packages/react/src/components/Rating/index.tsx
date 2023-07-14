import { Wrapper } from './styles'

export interface RatingProps {
  numberStars: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating({ numberStars }: RatingProps) {
  return (
    <Wrapper>
      {Array.from({ length: numberStars }).map((_, i) => (
        <>
          <input type="radio" id={`star${i}`} name="rating" value={i}></input>
          <label htmlFor={`star${i}`}></label>
        </>
      ))}
    </Wrapper>
  )
}

Rating.displayName = 'Rating'
