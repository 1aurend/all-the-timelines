import scrollama from 'scrollama'

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
