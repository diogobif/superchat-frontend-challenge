import React, { useState } from 'react';
import { api } from '../../api';
import { Line } from './styled';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

const CreateForm = () => {
  var codec = require('json-url')('lzw');
  const [gitUserName, setGitUserName] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [showFollowers, setShowFollowers] = useState(null);
  const [followersBgColor, setFollowersBgColor] = useState('');
  const [followersBorderColor, setFollowersBorderColor] = useState('');
  const [showRepos, setShowRepos] = useState(null);
  const [reposBgColor, setReposBgColor] = useState('');
  const [reposBorderColor, setReposBorderColor] = useState('');
  const [urlHash, setUrlHash] = useState('');

  function createObjData() {
    return {
      gitUserName,
      bgColor,
      borderColor,
      showFollowers,
      followersBgColor,
      followersBorderColor,
      showRepos,
      reposBgColor,
      reposBorderColor
    }
  }

  async function testGitUser() {
    if (gitUserName) {
      try {
        const {data} = await api.get(`/users/${gitUserName}`);
        if (!data.id) {
          alert(`No user found for ${gitUserName}`);
          return false;
        } else {
          return true;
        }
      } catch (error) {
        alert(`No user found for ${gitUserName}`);
        return false;
      }
    } else {
      setUrlHash('');
      return false;
    }
  }

  async function hashData() {
    setUrlHash('');
    if (await testGitUser()) {
      codec.compress(createObjData())
      .then(
        result => setUrlHash(`${window.location.host}/inf/${result}`),
        () => {
          alert('Error to encode hash, try again!');
          setUrlHash('');
        }
      );
    }
  }

  async function copyHash() {
    await hashData();
    if (urlHash) {
      navigator.clipboard.writeText(urlHash).then(function() {
        alert("Url copied to clipboard!");
      }, function(err) {
        console.error('Could not copy text: ', err);
      });
    }
  }

  const sanitizeString = (string) => string.toLowerCase().replace(/[^\w\s]/gi, '');

  return (
    <div className="d-flex flex-column col-12">
      <Line>
        <Form.Group className="formGroup">
          <Form.Label>Github username</Form.Label>
          <Form.Control 
            type="text" 
            value={gitUserName} 
            onChange={(event) => setGitUserName(event.target.value)} 
            placeholder="Github Username" 
          />
        </Form.Group>
        
        <Form.Group className="formGroup">
          <Form.Label>Bg Color</Form.Label>
          <InputGroup>
            <InputGroup.Text>#</InputGroup.Text>
            <FormControl
              type="text"
              value={bgColor} 
              maxLength="6"
              onChange={(event) => setBgColor(sanitizeString(event.target.value))} 
              placeholder="Card Color" 
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="formGroup">
          <Form.Label>Bg border color</Form.Label>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
            <FormControl
             type="text"
             value={borderColor} 
             onChange={(event) => setBorderColor(sanitizeString(event.target.value))} 
             placeholder="Card border color" 
            />
          </InputGroup>
        </Form.Group>
      </Line>

      <Line>
        <Form.Group className="formGroup">
          <Form.Label>Show followers</Form.Label>
          <Form.Select onChange={(event) => setShowFollowers(event.target.value)}>
            <option>Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="formGroup">
          <Form.Label>Followers bg color</Form.Label>
          <InputGroup>
            <InputGroup.Text>#</InputGroup.Text>
            <FormControl
              type="text"
              value={followersBgColor} 
              onChange={(event) => setFollowersBgColor(sanitizeString(event.target.value))} 
              placeholder="Followers bg color" 
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="formGroup">
          <Form.Label>Followers border color</Form.Label>
          <InputGroup>
            <InputGroup.Text>#</InputGroup.Text>
            <FormControl
              type="text"
              value={followersBorderColor} 
              onChange={(event) => setFollowersBorderColor(sanitizeString(event.target.value))} 
              placeholder="Followers border color" 
            />
          </InputGroup>
        </Form.Group>
      </Line>

      <Line>
        <Form.Group className="formGroup">
          <Form.Label>Show repos</Form.Label>
          <Form.Select onChange={(event) => setShowRepos(event.target.value)}>
            <option>Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="formGroup">
          <Form.Label>Repos bg color</Form.Label>
          <InputGroup>
            <InputGroup.Text>#</InputGroup.Text>
            <FormControl
              type="text"
              value={reposBgColor} 
              onChange={(event) => setReposBgColor(sanitizeString(event.target.value))} 
              placeholder="Repos bg color" 
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="formGroup">
          <Form.Label>Repos border color</Form.Label>
          <InputGroup>
            <InputGroup.Text>#</InputGroup.Text>
            <FormControl
              type="text"
              value={reposBorderColor} 
              onChange={(event) => setReposBorderColor(sanitizeString(event.target.value))} 
              placeholder="Repos border color" 
            />
          </InputGroup>
        </Form.Group>
      </Line>

      <Line>
        <Form.Group className="col-12" controlId="formBorderColor">
            <Form.Label>Generated Url</Form.Label>
            <Form.Control 
              type="text"
              readOnly
              value={urlHash} 
              placeholder="Generated url" 
            />
          </Form.Group>
      </Line>

      <Line>
        <Button variant="primary" className="block" onClick={() => hashData()} type="button">
            Generate
        </Button>

        <Button variant="primary" className="block" onClick={() => copyHash()} type="button">
            Copy url
        </Button>
      </Line>
    </div>
  )
}

export default CreateForm;