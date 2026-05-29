import { useEffect, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import type {
     SlideLayout, SlideStyle, SlideTone 
} from '../constant/presentation-option'
import { presentationQueryKeys } from './query-keys'
import {
  deletePresentation,
  regeneratePresentation,
  updatePresentation,
} from '../actions/presentation-mutation'

type SettingsForm = {
  title: string
  prompt: string
  slideCount: number
  style: SlideStyle
  tone: SlideTone
  layout: SlideLayout
}

export function usePresentationDetail(
  presentationId: string,
  opts?: {
    onDeleted?: () => void
  },
) {
  const queryClient = useQueryClient()
 
  const [form, setForm] = useState<SettingsForm>({
    title: '',
    prompt: '',
    slideCount: 8,
    style: 'minimal',
    tone: 'formal',
    layout: 'balanced',
  })
}