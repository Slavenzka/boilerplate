import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import Input from 'components/atoms/Input/Input'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import { StoriesExportObject } from 'stories/specs/index.spec'
import { InputVariants } from 'components/atoms/Input/Input.spec'

const list: ListItemProps[] = [
  {
    heading: `Variant DEFAULT`,
    component: (
      <Input
        value="Some input value"
        onChange={evt => console.log(evt)}
        label="Label text"
      />
    ),
    code: (
`
<Input
  value="Some input value"
  onChange={() => {}}
  label="Label text"
/>
`
    )
  },
  {
    heading: `Variant DEFAULT with a child component`,
    component: (
      <Input
        value="Some input value"
        onChange={evt => console.log(evt)}
        label="Label text"
      >
        <div>Some content renders here</div>
      </Input>
    ),
    code: (
`
<Input
  value="Some input value"
  onChange={() => {}}
  label="Label text"
>
  <div>Some content renders here</div>
</Input>
`
    )
  },
  {
    heading: `Variant DEFAULT with error message`,
    component: (
      <Input
        value="Some input value"
        onChange={evt => console.log(evt)}
        label="Label text"
        error="Some error message text"
        isRequired
      />
    ),
    code: (
`
<Input
  value="Some input value"
  onChange={evt => console.log(evt)}
  label="Label text"
  error="Some error message text"
  isRequired
/>
`
    )
  },
  {
    heading: `Variant DEFAULT with search presets`,
    component: (
      <Input
        value="Some input value"
        onChange={evt => console.log(evt)}
        label="Label text"
        variant={InputVariants.SEARCH}
        isRequired
      />
    ),
    code: (
`
<Input
  value="Some input value"
  onChange={evt => console.log(evt)}
  label="Label text"
  variant={InputVariants.SEARCH}
  isRequired
/>
`
    )
  },
]

const listCalendar: ListItemProps[] = [
  {
    heading: `Variant DEFAULT`,
    component: (
      <Input
        value="Some input value"
        onChange={evt => console.log(evt)}
        label="Label text"
        variant={InputVariants.CALENDAR_DEFAULT}
      />
    ),
    code: (
`
<Input
  value="Some input value"
  onChange={() => {}}
  label="Label text"
  variant={InputVariants.CALENDAR_DEFAULT}
/>
`
    )
  },
  {
    heading: `Variant DEFAULT with a child component`,
    component: (
      <Input
        value="Some input value"
        onChange={evt => console.log(evt)}
        label="Label text"
      >
        <div>Some content renders here</div>
      </Input>
    ),
    code: (
`
<Input
  value="Some input value"
  onChange={() => {}}
  label="Label text"
>
  <div>Some content renders here</div>
</Input>
`
    )
  },
  {
    heading: `Variant DEFAULT with error message`,
    component: (
      <Input
        value="Some input value"
        onChange={evt => console.log(evt)}
        label="Label text"
        error="Some error message text"
        isRequired
      />
    ),
    code: (
`
<Input
  value="Some input value"
  onChange={evt => console.log(evt)}
  label="Label text"
  error="Some error message text"
  isRequired
/>
`
    )
  },
  {
    heading: `Variant DEFAULT with search presets`,
    component: (
      <Input
        value="Some input value"
        onChange={evt => console.log(evt)}
        label="Label text"
        variant={InputVariants.SEARCH}
        isRequired
      />
    ),
    code: (
`
<Input
  value="Some input value"
  onChange={evt => console.log(evt)}
  label="Label text"
  variant={InputVariants.SEARCH}
  isRequired
/>
`
    )
  },
]

const listCheckbox: ListItemProps[] = [
  {
    heading: `Variant Checkbox checked`,
    component: (
      <Input
        onChange={evt => console.log(evt)}
        variant={InputVariants.CHECKBOX_DEFAULT}
        label={`Some label text`}
        checked
      />
    ),
    code: (
      `
<Input
  onChange={evt => console.log(evt)}
  variant={InputVariants.CHECKBOX_DEFAULT}
  label={\`Some label text\`}
  checked
/>
`
    )
  },
  {
    heading: `Variant Checkbox unchecked`,
    component: (
      <Input
        checked={false}
        onChange={evt => console.log(evt)}
        label={`Some label text`}
        variant={InputVariants.CHECKBOX_DEFAULT}
      />
    ),
    code: (
      `
<Input
  checked={false}
  onChange={evt => console.log(evt)}
  label={\`Some label text\`}
  variant={InputVariants.CHECKBOX_DEFAULT}
/>
`
    )
  },
  {
    heading: `Variant Checkbox w/ error message`,
    component: (
      <Input
        onChange={evt => console.log(evt)}
        label={`Some label text`}
        variant={InputVariants.CHECKBOX_DEFAULT}
        error={`Please, mark the checkbox to proceed`}
        checked
      />
    ),
    code: (
      `
<Input
  checked={false}
  onChange={evt => console.log(evt)}
  label={\`Some label text\`}
  variant={InputVariants.CHECKBOX_DEFAULT}
  error={\`Please, mark the checkbox to proceed\`}
/>
`
    )
  },
]

export const DEFAULT = () => <ComponentRenderTemplateStory list={list} />
export const CALENDAR = () => <ComponentRenderTemplateStory list={listCalendar} />
export const CHECKBOX = () => <ComponentRenderTemplateStory list={listCheckbox} />

export default {
  title: `Components/Atoms/Input`,
  component: Input,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Input`}
      componentDescription={(
        <>
          Renders input element that can be controlled either uncontrolled. Ready to be controlled by react-hook-form via
          useRenderFormItems hook.
        </>
      )}
      proptypesString={(
`
export enum InputVariants {
  DEFAULT = \`DEFAULT\`,
  CHECKBOX_DEFAULT = \`CHECKBOX_DEFAULT\`,
  SEARCH = \`SEARCH\`,
  CALENDAR_DEFAULT = \`CALENDAR_DEFAULT\`,
  PASSWORD = \`PASSWORD\`
}

export enum InputTypes {
  TEXTAREA = \`textarea\`,
  TEXT = \`text\`,
  NUMBER = \`number\`,
  TEL = \`tel\`,
  EMAIL = \`email\`,
  CHECKBOX = \`checkbox\`
}

class InputLabelVariants {
}

export interface InputDefaultProps extends PropsWithClassName {
  /*
  * A flag for checkbox status management
  */
  checked?: boolean;
  /*
  * Cumulative class name form Input component wrapper
  */
  className?: string;
  /*
  * Error message to be rendered, e.g. from form state manager
  */
  error?: ReactNode;
  /*
  * Ref setter, e.g. from react-hook-form
  */
  formRef?: <T>(node: T) => void;
  /*
  * Applies styles to highlight a required field
  */
  isRequired?: boolean;
  /*
  * Provides text content for input's label wrapper
  */
  label?: string;
  /*
  * Style presets for input label
  */
  labelVariant?: InputLabelVariants;
  /*
  * Defines the type of input element
  */
  inputType?: InputTypes;
  /*
  * A flag to avoid render of error message, but keeps application of error styles. For example,
  * if global form error message would be rendered
  */
  isErrorRenderRequired?: boolean;
  /*
  * Enum value to apply corresponding style and logic presets
  */
  variant?: InputVariants;
}

export type InputProps = HTMLProps<HTMLInputElement> & InputDefaultProps & PropsWithClassName
`
      )}
      defaultPropsString={(
`
Input.defaultProps = {
  inputType: InputTypes.TEXT,
  variant: InputVariants.DEFAULT
}
`
      )}
    />
  )]
} as StoriesExportObject