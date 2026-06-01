import PptxGenJS from "pptxgenjs"

type SlideData = {
  title: string
  content: string
  imageUrl?: string | null
}

type PresentationData = {
  title: string
  slides: SlideData[]
}

export async function exportPresentation(
  presentation: PresentationData,
) {
  const pptx = new PptxGenJS()

  pptx.layout = "LAYOUT_WIDE"

  pptx.author = "PPT-AI"
  pptx.company = "PPT-AI"
  pptx.subject = presentation.title
  pptx.title = presentation.title

  for (const slideData of presentation.slides) {
    const slide = pptx.addSlide()

    slide.background = {
      color: "111111",
    }

    slide.addText(slideData.title, {
      x: 0.5,
      y: 0.5,
      w: 12,
      h: 0.8,
      fontSize: 24,
      bold: true,
      color: "FFFFFF",
    })

    slide.addText(slideData.content, {
      x: 0.5,
      y: 1.5,
      w: 6,
      h: 3,
      fontSize: 16,
      color: "DDDDDD",
    })

    if (slideData.imageUrl) {
      slide.addImage({
        path: slideData.imageUrl,
        x: 7,
        y: 1,
        w: 5,
        h: 3,
      })
    }
  }

  await pptx.writeFile({
    fileName: `${presentation.title}.pptx`,
  })
}