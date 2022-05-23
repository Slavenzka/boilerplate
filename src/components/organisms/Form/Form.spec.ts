import {
  Control, FieldErrors,
  FieldValues,
  NestedValue,
  UnpackNestedValue,
  UseFormClearErrors,
  UseFormReturn
} from 'react-hook-form'
import { SelectCustomOptionType } from 'components/molecules/SelectCustom/SelectCustom.spec'

export enum FormElements {
  INPUT = `INPUT`,
  INPUT_IMAGE = `INPUT_IMAGE`,
  INPUT_CHECKBOX = `INPUT_CHECKBOX`,
  DATEPICKER = `DATEPICKER`,
  DATE_RANGE_PICKER = `DATE_RANGE_PICKER`,
  SELECT = `SELECT`,
  TEXT_AREA_VARIABLE_HEIGHT = `TEXT_AREA_VARIABLE_HEIGHT`
}

type FormItemDataType = string | number | Date | null | undefined | NestedValue;

interface ValidationFunctionType {
  (value: string): boolean | string
}

export interface FormConfigItemType {
  element: Pick<FormElements, keyof FormElements>,
  name: string,
  defaultValue?: FormItemDataType,
  validation?: {
    [key: string]: string | boolean | ValidationFunctionType;
  };
  options?: SelectCustomOptionType[];
  onChangeCallback?: (clearErrors: UseFormClearErrors<FieldValues>, errors: FieldErrors) => void;
  className?: string
}

export interface FormProps {
  formConfig?: FormConfigItemType[];
  submitForm: <FormMethods>(data: UnpackNestedValue<FormItemDataType>, methods: FormMethods) => void;
  formManagerProps?: {
    [key: string]: NestedValue | string | boolean
  },
  children: ({
    items,
    control,
  }: {
    items: JSX.Element[],
    control: Control
  } & UseFormReturn) => JSX.Element
}