import { cn } from '../../lib/utils'
import * as React from 'react'
import { Check } from 'lucide-react'

export interface Step {
  label: string
  description?: string
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[]
  currentStep?: number
  onStepClick?: (index: number) => void
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  function Stepper({ steps, currentStep = 0, onStepClick, className, ...props }, ref) {
    return (
      <div ref={ref} className={cn('flex items-center justify-between', className)} {...props}>
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center">
              <button
                onClick={() => onStepClick?.(idx)}
                disabled={idx > currentStep && !onStepClick}
                className={cn(
                  'w-10 h-10 rounded-2xl flex items-center justify-center transition-all',
                  idx < currentStep
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                    : idx === currentStep
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-[0_4px_16px_rgba(59,130,246,0.4)]'
                      : 'bg-white/5 text-white/30',
                )}
              >
                {idx < currentStep ? <Check size={18} /> : idx + 1}
              </button>
              <span
                className={cn(
                  'mt-2 text-[10px] font-bold uppercase tracking-wider',
                  idx <= currentStep ? 'text-white' : 'text-white/30',
                )}
              >
                {step.label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={cn(
                  'flex-1 h-0.5 mx-4',
                  idx < currentStep
                    ? 'bg-gradient-to-r from-blue-500 to-blue-400'
                    : 'bg-white/10',
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    )
  },
)
Stepper.displayName = 'Stepper'
