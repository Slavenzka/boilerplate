import { Fragment, useMemo } from 'react'
import { Control, Controller, UseFormReturn } from 'react-hook-form'
import Input from 'components/atoms/Input/Input'
import ImageInput from 'components/organisms/formElements/ImageInput/ImageInput'
import ImageInputPreview from 'components/molecules/ImageInputPreview/ImageInputPreview'
import Datepicker from 'components/organisms/formElements/Datepicker/Datepicker'
import DateRangePicker from 'components/organisms/formElements/DateRangePicker/DateRangePicker'
import SelectCustom from 'components/molecules/SelectCustom/SelectCustom'
import TextareaVariableHeight from 'components/organisms/formElements/TextareaVariableHeight/TextareaVariableHeight'
import { InputVariants } from 'components/atoms/Input/Input.spec'
import { FormConfigItemType, FormElements } from 'components/organisms/Form/Form.spec'
import { SelectCustomOptionType } from 'components/molecules/SelectCustom/SelectCustom.spec'

interface UseRenderFormItemsProps extends UseFormReturn {
  list: FormConfigItemType[],
  control: Control
}

function useRenderFormItems ({ list, control, clearErrors }: UseRenderFormItemsProps) {
  return useMemo(() => {
    if (!list || !Array.isArray(list) || list.length === 0) return []

    return list.map(({
      element,
      name,
      validation = {},
      defaultValue,
      onChangeCallback,
      ...item
    }) => {
      switch (element) {
        case FormElements.INPUT_IMAGE: {
          return (
            <Fragment key={name}>
              <Controller
                render={({
                  field: { name, value, onChange },
                  fieldState: { error }
                }) => (
                  <ImageInput
                    ImagePreview={ImageInputPreview}
                    error={error?.message as string ?? error}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...item}
                  />
                )}
                control={control}
                rules={validation}
                name={name}
                defaultValue={defaultValue}
              />
            </Fragment>
          )
        }
        case FormElements.DATEPICKER: {
          return (
            <Fragment key={name}>
              <Controller
                render={({
                  field: { value, name, onChange },
                  fieldState: { error }
                }) => (
                  <Datepicker
                    {...item}
                    error={error?.message as string ?? error}
                    isRequired={Boolean(validation?.required)}
                    name={name}
                    onChange={onChange}
                    value={value}
                  />
                )}
                control={control}
                rules={validation}
                name={name}
                defaultValue={defaultValue ?? null}
              />
            </Fragment>
          )
        }
        case FormElements.DATE_RANGE_PICKER: {
          return (
            <Fragment key={name}>
              <Controller
                render={({
                  field: { value, name, onChange},
                  fieldState: { error }
                }) => (
                  <DateRangePicker
                    {...item}
                    name={name}
                    value={value}
                    onChange={onChange}
                    error={error?.message as string ?? error}
                    isRequired={Boolean(validation?.required)}
                  />
                )}
                control={control}
                rules={{
                  ...validation,
                  validate: {
                    validRange: ({from, to}) => {
                      const isValid = (!from && !to) || (to && from && to >= from)
                      return isValid || `Error`
                    }
                  }
                }}
                name={name}
                defaultValue={defaultValue ?? {
                  from: null,
                  to: null
                }}
              />
            </Fragment>
          )
        }
        case FormElements.SELECT: {
          const { options, ...restItem } = item

          return (
            <Fragment key={name}>
              <Controller
                render={({
                  field: { ref, ...field },
                  fieldState: { error }
                }) => (
                  <SelectCustom
                    error={error?.message ?? error}
                    formRef={ref}
                    isRequired={Boolean(validation?.required)}
                    options={options as SelectCustomOptionType[]}
                    {...field}
                    {...restItem}
                  />
                )}
                control={control}
                rules={validation}
                name={name}
                defaultValue={defaultValue ?? ``}
              />
            </Fragment>
          )
        }
        case FormElements.TEXT_AREA_VARIABLE_HEIGHT: {
          return (
            <Fragment key={name}>
              <Controller
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <TextareaVariableHeight
                    error={error?.message ?? error}
                    formRef={ref}
                    isRequired={Boolean(validation?.required)}
                    {...field}
                    {...item}
                  />
                )}
                control={control}
                rules={validation}
                name={name}
                defaultValue={defaultValue ?? ``}
              />
            </Fragment>
          )
        }
        case FormElements.INPUT_CHECKBOX: {
          return (
            <Fragment key={name}>
              <Controller
                render={({
                  field: { ref, value, ...field },
                  fieldState: { error }
                }) => (
                  <Input
                    checked={value}
                    error={error?.message ?? error}
                    formRef={ref}
                    isRequired={Boolean(validation?.required)}
                    variant={InputVariants.CHECKBOX_DEFAULT}
                    {...field}
                    {...item}
                  />
                )}
                control={control}
                rules={validation}
                name={name}
                defaultValue={defaultValue ?? false}
              />
            </Fragment>
          )
        }
        default: {
          return (
            <Fragment key={name}>
              <Controller
                render={({
                  field: { ref, onChange, ...field },
                  fieldState: { error },
                  formState: {errors}
                }) => (
                  <Input
                    error={error?.message ?? error}
                    formRef={ref}
                    isRequired={Boolean(validation?.required)}
                    onChange={evt => {
                      onChange(evt)
                      onChangeCallback && onChangeCallback(clearErrors, errors)
                    }}
                    {...field}
                    {...item}
                  />
                )}
                control={control}
                rules={validation}
                name={name}
                defaultValue={defaultValue ?? ``}
              />
            </Fragment>
          )
        }
      }
    })
  }, [list, control, clearErrors])
}

export default useRenderFormItems
