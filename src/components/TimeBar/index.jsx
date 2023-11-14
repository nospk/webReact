import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';
import DateTime from './DateTime';
export default function TimeBar() {
	const [lang, setLang] = useState('en');
	return (
		<div className="time-bar">
			<Container>
				<Row>
					<Col xs={9}>
						<DateTime />
					</Col>
					<Col xs={3} className="text-center">
						<a className="link" href="/dowload">
							DOWNLOAD
						</a>
						<span>|</span>
						<a className="link" href="/mobile">
							MOBILE
						</a>
						<span>|</span>
						<span>EN</span>
						<span className="select-lang">
							<DropdownButton
								id="lang-btn"
								title={<img src={`/lang-${lang}.png`} alt="English" />}
							>
								<Dropdown.Item>
									<img
										src="/lang-en.png"
										onClick={() => setLang('en')}
										alt="English"
									/>
								</Dropdown.Item>
								<Dropdown.Item>
									<img
										src="/lang-cn.png"
										onClick={() => setLang('cn')}
										alt="China"
									/>
								</Dropdown.Item>
							</DropdownButton>
						</span>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
