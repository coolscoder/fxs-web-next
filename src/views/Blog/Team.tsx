import React, { FC } from 'react'
import { Button, Container, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'

interface TeamProps {
  color?: any
}

const Team: FC<TeamProps> = (ButtonProps) => (
  <Block reveal>
    <Container sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h3" sx={{ mb: 6 }}>
        The idea that the greatest tech companies aren't really tech says a lot about the importance of design and
        technology.
      </Typography>
      <Button variant="outlined" size="large" sx={{ borderRadius: 30 }} {...ButtonProps}>
        Let's Work Together
      </Button>
    </Container>
  </Block>
)

export default Team
