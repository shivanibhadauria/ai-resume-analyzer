import React from 'react'
import ScoreGuage from './ScoreGauge'


const Category = ({title , score}: {title: string, score: number}) => {
  return (
    <div className='resume-summary'>
    {title} -{score}
    </div>
  )
}
const Summary = ({feedback }: {feedback : Feedback}) => {
  return (
    <div className='bg-white rounded-2xl shadpw-md w-full' >
      <div className='flex flex-row items-center p-4 gap-8' >
        <ScoreGuage score={feedback.overallScore} />
        <div className='flex flex-col gap-2 ' >
          <h2 className='text-2xl font-bold' > Your Resume Score</h2>
          <p className='text-sm text-gray-500'>
            This score id calculated based on the variable listed below.
          </p>
        </div>
      </div>

<Category title='Tone and Style' score={feedback.toneAndStyle?.score} />
<Category title='Tone and Style' score={feedback.content?.score} />
<Category title='Tone and Style' score={feedback.structure?.score} />
<Category title='Tone and Style' score={feedback.skills?.score} />

    </div>
  )
}

export default Summary