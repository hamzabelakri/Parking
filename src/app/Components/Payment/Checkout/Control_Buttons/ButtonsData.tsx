export const ButtonsData = (inkStatus: string) => [
  {
    title: 'CHEKOUT.BARRIER.BUTTON',
    img: 'media/buttons/Barrier.svg',
  },
  {
    title: inkStatus === 'out' ? 'NO INK' : 'CHEKOUT.PRINT.BUTTON',
    img: inkStatus === 'out' ? 'media/buttons/FreeRate.svg' : 'media/buttons/Print.svg',
  },
  {
    title: 'CHEKOUT.RECEIPT.BUTTON',
    img: 'media/buttons/Receipt.svg',
  },
]
