import * as DialogUI from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'
import { Button } from '../Button'
import {
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  Flex,
  IconButton,
} from './styles'

export interface DialogProps {
  title?: string
  secondaryButton: boolean
  labelPrimaryButton?: string
  labelSecondaryButton?: string
  isIconClosed: boolean
  children?: any
}

export const Dialog = ({
  title,
  secondaryButton,
  labelPrimaryButton,
  labelSecondaryButton,
  children,
  isIconClosed,
}: DialogProps) => (
  <DialogUI.Root>
    <DialogUI.Trigger asChild>
      <Button>Edit profile</Button>
    </DialogUI.Trigger>
    <DialogUI.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{children}</DialogDescription>
        <Flex
          css={{
            marginTop: 25,
            gap: 16,
            justifyContent: secondaryButton ? 'space-between' : 'flex-end',
          }}
        >
          {secondaryButton && (
            <DialogUI.Close asChild>
              <Button variant={'outlined'} fullWidth={secondaryButton}>
                {labelSecondaryButton}
              </Button>
            </DialogUI.Close>
          )}
          <DialogUI.Close asChild>
            <Button fullWidth={secondaryButton}>{labelPrimaryButton}</Button>
          </DialogUI.Close>
        </Flex>
        {isIconClosed && (
          <DialogUI.Close asChild>
            <IconButton aria-label="Close">
              <X />
            </IconButton>
          </DialogUI.Close>
        )}
      </DialogContent>
    </DialogUI.Portal>
  </DialogUI.Root>
)

Dialog.displayName = 'Dialog'
