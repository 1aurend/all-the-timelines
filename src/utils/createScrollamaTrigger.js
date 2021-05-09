import scrollama from 'scrollama'
import Result from 'folktale/result'


const createScrollamaTrigger = params => {
  const {offset, progress, enter, exit, id, parent} = params
  const trigger = scrollama()
  trigger
    .setup({
      step: `.${id}`,
      offset: offset,
      progress: !!progress,
      threshold: 4,
      debug: true,
      // parent:parent
    })
    if (!!enter) {
      trigger.onStepEnter(enter)
    }
    if (!!progress) {
      trigger.onStepProgress(progress)
    }
    if (!!exit) {
      trigger.onStepExit(exit)
    }
  window.addEventListener('resize', trigger.resize)
}

export default createScrollamaTrigger


export const onTrigger = update => dir => res => {
  console.log(Result.Ok('12').map(x => x*2))
      res.direction === dir
        ? Result.Ok(update(res))
        : Result.Error('inactive direction')
    }
