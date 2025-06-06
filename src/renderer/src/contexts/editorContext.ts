import { ReactCodeMirrorRef } from '@uiw/react-codemirror'
import { createContext, Dispatch, SetStateAction } from 'react'

interface EditorContextType {
  titleEditor: React.RefObject<HTMLTextAreaElement> | null
  bodyEditor: React.RefObject<ReactCodeMirrorRef> | null
  isVisible: boolean
  setIsVisible: (value: boolean) => void
  current: string | null
  setCurrent: Dispatch<SetStateAction<string | null>>
}

export const EditorContext = createContext<EditorContextType>({
  titleEditor: null,
  bodyEditor: null,
  isVisible: true,
  setIsVisible: () => {},
  current: null,
  setCurrent: () => {}
})
