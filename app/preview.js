import { useContext } from 'react'
import { AppContext } from 'context'

import {
  Button,
  Input,
  Checkbox,
  Slider,
  Textarea,
  Radio,
  Select,
  Video,
  Logo,
  Card,
  Avatar,
  Label,
  Link,
  Icon,
  Breadcrumb,
  Text,
} from 'components/atoms'
import {
  CheckboxGroup,
  ProductCard,
  RadioGroup,
  Feature,
} from 'components/molecules'
import { Comments, Feed, Form } from 'components/organisms'
import { Ecommerce, Blog, Dashboard, Landing } from 'components/templates'

const Preview = () => {
  const { selectedComponent } = useContext(AppContext)

  return (
    <div className="flex items-center justify-center w-full h-full">
      {/* atoms */}
      {selectedComponent === 'button' && <Button />}
      {selectedComponent === 'card' && <Card />}
      {selectedComponent === 'avatar' && <Avatar />}
      {selectedComponent === 'label' && <Label />}
      {selectedComponent === 'link' && <Link />}
      {selectedComponent === 'icon' && <Icon />}
      {selectedComponent === 'breadcrumb' && <Breadcrumb />}
      {selectedComponent === 'text' && <Text />}

      {/* molecules */}
      {selectedComponent === 'breadcrumbs' && <Breadcrumbs />}
      {selectedComponent === 'timeline-item' && <Timeline />}
      {selectedComponent === 'field' && <Field />}
      {selectedComponent === 'comment' && <Comment />}
      {selectedComponent === 'file' && <File />}

      {/* organisms */}
      {selectedComponent === 'comments' && <Comments />}
      {selectedComponent === 'info-block' && <InfoBlock />}
      {selectedComponent === 'user-block' && <UserBlock />}
      {selectedComponent === 'timeline' && <Timeline />}

      {/* templates */}
      {selectedComponent === 'ecommerce' && <Ecommerce />}
      {selectedComponent === 'blog' && <Blog />}
      {selectedComponent === 'dashboard' && <Dashboard />}
      {selectedComponent === 'landing' && <Landing />}
    </div>
  )
}

export default Preview

// {selectedComponent === 'input' && <Input />}
// {selectedComponent === 'checkbox' && <Checkbox />}
// {selectedComponent === 'slider' && <Slider />}
// {selectedComponent === 'textarea' && <Textarea />}
// {selectedComponent === 'radio' && <Radio />}
// {selectedComponent === 'select' && <Select />}
// {selectedComponent === 'video' && <Video />}
// {selectedComponent === 'logo' && <Logo />}
//
// {selectedComponent === 'checkbox-group' && <CheckboxGroup />}
// {selectedComponent === 'product-card' && <ProductCard />}
// {selectedComponent === 'radio-group' && <RadioGroup />}
// {selectedComponent === 'feature' && <Feature />}
//
// {selectedComponent === 'comments' && <Comments />}
// {selectedComponent === 'feed' && <Feed />}
// {selectedComponent === 'form' && <Form />}
