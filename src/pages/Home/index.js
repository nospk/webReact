import TimeBar from '../../components/TimeBar'
import './styles.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Page () {
  return (
    <>
      <div className='t-header'>
        <TimeBar />
        <section className='header-top'>
          <Container>
            <Row>
              <Col xs={6}>
                <img className='logo' src='/logo08.gif' alt='logo' />
              </Col>
              <Col xs={6}>
                <div className='header-sec'>
                  <div className='log-field username'>
                    <input
                      className='log_input'
                      type='text'
                      name='username'
                      placeholder='Username'
                      required=''
                    />
                  </div>
                  <div className='log-field password'>
                    <input
                      className='log_input'
                      type='password'
                      name='password'
                      placeholder='Password'
                      required=''
                    />
                    <a href='forgotpass.html' className='forgot'>
                      Forgot?
                    </a>
                  </div>
                  <button
                    type='submit'
                    className='login-btn'
                    onclick="window.location.href='deposit.html';"
                  >
                    LOGIN
                  </button>
                  <button
                    type='button'
                    className='join-btn'
                    onclick="location.href='register.html'"
                  >
                    JOIN NOW
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <div>Body</div>
      <div>Footer</div>
    </>
  )
}

export default Page
